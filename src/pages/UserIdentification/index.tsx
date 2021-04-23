import React, { useState } from 'react'
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Button from '../../components/Button'

import { Container, Title, Input, Emoji, Header, Wrapper } from './styles'

const UserIdentification = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFailed, setIsFailed] = useState(false)
  const [name, setName] = useState('')

  const navigation = useNavigation()

  function handleInputBlur() {
    setIsFocused(false)
    setIsFailed(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setIsFailed(!!value)
    setName(value)
  }

  function handleSubmit() {
    if (!name) return

    AsyncStorage.setItem('@plantmanager:username', name)
    navigation.navigate('Confirmation', {
      title: 'Prontinho',
      subTile:
        'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
      buttonTitle: 'Começar',
      icon: 'smile',
      nextPage: 'PlantSelect',
    })
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Wrapper>
          <Header>
            <Emoji>😄</Emoji>
            <Title>Como podemos{'\n'}chamar você?</Title>
          </Header>
          <Input
            placeholder="Digite seu nome"
            isFocused={isFocused}
            isFailed={isFailed}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onChangeText={handleInputChange}
          />
          <Button
            disabled={!isFailed}
            title="Confirmar"
            onPress={handleSubmit}
          />
        </Wrapper>
      </TouchableWithoutFeedback>
    </Container>
  )
}

export default UserIdentification
