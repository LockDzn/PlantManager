import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Platform } from 'react-native'

import Button from '../../components/Button'

import { Container, Title, Text, Emoji, Header } from './styles'

const UserIdentification = () => {
  const navigation = useNavigation()

  function handleConfirmation() {
    navigation.navigate('PlantSelect')
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header>
        <Emoji>😄</Emoji>
        <Title>Prontinho</Title>
        <Text>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
      </Header>
      <Button title="Começar" onPress={handleConfirmation} />
    </Container>
  )
}

export default UserIdentification
