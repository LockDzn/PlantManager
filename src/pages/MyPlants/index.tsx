import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import Header from '../../components/Header'

import { PlantProps } from '../../interfaces'
import { deletePlant, getPlants } from '../../libs/storage'

import Load from '../../components/Load'
import MyPlantsCard from '../../components/MyPlantsCard'
import WaterDropIcon from '../../assets/waterdrop.png'

import {
  Container,
  Section,
  TipContainer,
  TipText,
  Image,
  Title,
  FlatList,
} from './styles'

const MyPlants = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([])
  const [loading, setLoading] = useState(true)
  const [nextWaterd, setNextWaterd] = useState('')

  useEffect(() => {
    async function loadingStorageData() {
      const plantStoraged = await getPlants()

      const nextTime = formatDistance(
        new Date(plantStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: ptBR }
      )

      setNextWaterd(`Regue sua ${plantStoraged[0].name} daqui á ${nextTime}.`)
      setMyPlants(plantStoraged)
      setLoading(false)
    }

    loadingStorageData()
  })

  function handleRemove(item: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${item.name}?`, [
      { text: 'Não', style: 'cancel' },
      {
        text: 'Sim',
        onPress: async () => {
          try {
            await deletePlant(item.id)
            setMyPlants((oldPlants) =>
              oldPlants.filter((plant) => plant.id != item.id)
            )
          } catch (err) {
            Alert.alert(
              'Não foi possivel remover sua planta',
              'Tente novamente'
            )
          }
        },
      },
    ])
  }

  if (loading) return <Load />

  return (
    <Container>
      <Header page="MyPlants" />

      <Section>
        <TipContainer>
          <Image source={WaterDropIcon} />
          <TipText>{nextWaterd}</TipText>
        </TipContainer>
        <Title>Próximas regadas</Title>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <MyPlantsCard data={item} handleRemove={() => handleRemove(item)} />
          )}
        />
      </Section>
    </Container>
  )
}

export default MyPlants
