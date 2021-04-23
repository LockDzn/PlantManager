import React, { useState } from 'react'
import { Platform, Alert } from 'react-native'
import { isBefore, format } from 'date-fns'

import { useRoute } from '@react-navigation/core'
import { useNavigation } from '@react-navigation/native'

import { SvgFromUri } from 'react-native-svg'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'

import { PlantProps } from '../../interfaces'
import { getPlants, savePlant } from '../../libs/storage'

import WaterDropIcon from '../../assets/waterdrop.png'

import Button from '../../components/Button'

import {
  ScrollView,
  Container,
  Header,
  Title,
  Description,
  TipContainer,
  Image,
  TipText,
  ScheduleContainer,
  ScheduleLabel,
  Section,
  DataTimePickerButton,
  DataTimePickerButtonText,
} from './styles'

type RouteParams = {
  plant: PlantProps
}

const PlantSave = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios')

  const navigation = useNavigation()
  const route = useRoute()

  const { plant } = route.params as RouteParams

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS == 'android') {
      setShowDatePicker((oldValue) => !oldValue)
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date())
      return Alert.alert('⚠️ Por favor', 'Selecione uma data no futuro!')
    }

    if (dateTime) setSelectedDateTime(dateTime)
  }

  function openDataTimerPicker() {
    setShowDatePicker(true)
  }

  async function handleSavePlant() {
    try {
      await savePlant({ ...plant, dateTimeNotification: selectedDateTime })

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subTile:
          'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextPage: 'MyPlants',
      })
    } catch (err) {}
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        width: '100%',
        height: '100%',
      }}
    >
      <Container>
        <Header>
          <SvgFromUri uri={plant.photo} height={150} width={150} />
          <Title>{plant.name}</Title>
          <Description>{plant.about}</Description>
        </Header>

        <Section>
          <TipContainer>
            <Image source={WaterDropIcon} />
            <TipText>{plant.water_tips}</TipText>
          </TipContainer>

          <ScheduleContainer>
            <ScheduleLabel>
              Ecolha o melhor horário para ser lembrado:
            </ScheduleLabel>
            {showDatePicker && (
              <DateTimePicker
                value={selectedDateTime}
                mode="time"
                display="spinner"
                onChange={handleChangeTime}
              />
            )}
            {Platform.OS == 'android' && (
              <DataTimePickerButton onPress={openDataTimerPicker}>
                <DataTimePickerButtonText>
                  Mudar 🕑 {format(selectedDateTime, 'HH:mm')}
                </DataTimePickerButtonText>
              </DataTimePickerButton>
            )}
          </ScheduleContainer>
          <Button title="Cadastrar planta" onPress={handleSavePlant} />
        </Section>
      </Container>
    </ScrollView>
  )
}

export default PlantSave
