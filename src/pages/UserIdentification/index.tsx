import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native'

import Button from '../../components/Button'

import { Container, Title, Input, Emoji, Header, Wrapper } from './styles'

const Confirmation = () => {
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
    navigation.navigate('Confirmation')
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

export default Confirmation
