import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Platform } from 'react-native'

import Button from '../../components/Button'

import { Container, Title, Text, Emoji, Header } from './styles'

type Props = {
  title: string
  subTile: string
  buttonTitle: string
  icon: 'smile' | 'hug'
  nextPage: string
}

const emojis = {
  hug: '🤗',
  smile: '😄',
}

const Confirmation = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const { title, subTile, buttonTitle, icon, nextPage } = route.params as Props

  function handleConfirmation() {
    navigation.navigate(nextPage)
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header>
        <Emoji>{emojis[icon]}</Emoji>
        <Title>{title}</Title>
        <Text>{subTile}</Text>
      </Header>
      <Button title={buttonTitle} onPress={handleConfirmation} />
    </Container>
  )
}

export default Confirmation
