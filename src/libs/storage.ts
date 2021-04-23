import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notifications from 'expo-notifications'
import { format } from 'date-fns'

import {
  PlantProps,
  PlantWithDateTimeProps,
  StoragePlantProps,
} from '../interfaces'

export async function savePlant(plant: PlantWithDateTimeProps): Promise<void> {
  try {
    const nextTime = new Date(plant.dateTimeNotification)
    const now = new Date()

    const { repeat_every, times } = plant.frequency

    if (repeat_every == 'week') {
      const interval = Math.trunc(7 / times)
      nextTime.setDate(now.getTime() + interval)
    } else {
      nextTime.setDate(now.getTime() + 1)
    }

    const seconds = Math.abs(
      Math.ceil((now.getTime() - nextTime.getTime()) / 1000)
    )

    const notificationID = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Heey, 🌱',
        body: `Está na hora de cuidar da sua ${plant.name}!`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: { plant },
      },
      trigger: {
        seconds: seconds < 60 ? 60 : seconds,
        repeats: true,
      },
    })

    const data = await AsyncStorage.getItem('@plantmanager:plants')
    const oldPlantes = data ? (JSON.parse(data) as StoragePlantProps) : {}

    const newPlant = {
      [plant.id]: {
        data: plant,
        notificationID,
      },
    }

    await AsyncStorage.setItem(
      '@plantmanager:plants',
      JSON.stringify({ ...newPlant, ...oldPlantes })
    )
  } catch (err) {
    throw new Error(err)
  }
}

export async function deletePlant(id: string): Promise<void> {
  const data = await AsyncStorage.getItem('@plantmanager:plants')
  const plants = data ? (JSON.parse(data) as StoragePlantProps) : {}

  await Notifications.cancelScheduledNotificationAsync(
    plants[id].notificationID
  )

  delete plants[id]

  await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify(plants))
}

export async function getPlants(): Promise<PlantWithDateTimeProps[]> {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants')
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {}

    const plantsSorted = Object.keys(plants)
      .map((plant) => {
        return {
          ...plants[plant].data,
          hour: format(
            new Date(plants[plant].data.dateTimeNotification),
            'HH:mm'
          ),
        }
      })
      .sort((a, b) =>
        Math.floor(
          new Date(a.dateTimeNotification).getTime() / 1000 -
            Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
        )
      )

    return plantsSorted
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

export async function clearPlants(): Promise<void> {
  await AsyncStorage.removeItem('@plantmanager:plants')
  await Notifications.cancelAllScheduledNotificationsAsync()
}
