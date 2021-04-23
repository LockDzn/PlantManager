import React from 'react'
import { useNavigation } from '@react-navigation/core'

import { Container, Title, SubTitle, Image, Touch, ArrowIcon } from './styles'

import wateringImg from '../../assets/watering.png'
import { clearPlants } from '../../libs/storage'

const Welcome = () => {
  const navigation = useNavigation()

  function handleStart() {
    navigation.navigate('UserIdentification')
  }

  return (
    <Container>
      <Title>
        Gerencie {'\n'} suas plantas {'\n'} de forma fácil
      </Title>
      <Image source={wateringImg} />
      <SubTitle>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </SubTitle>
      <Touch onPress={handleStart} activeOpacity={0.7}>
        <ArrowIcon name="chevron-right" />
      </Touch>
    </Container>
  )
}

export default Welcome
