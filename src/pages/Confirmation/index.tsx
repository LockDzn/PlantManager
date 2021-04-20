import React from 'react'
import { useState } from 'react'

import { Platform, View } from 'react-native'

import Button from '../../components/Button'

import { Container, Title, Text, Emoji, Header, Wrapper } from './styles'

const UserIdentification = () => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header>
        <Emoji>😄</Emoji>
        <Title>Prontinho</Title>
        <Text>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
      </Header>
      <Button title="Começar" />
    </Container>
  )
}

export default UserIdentification
