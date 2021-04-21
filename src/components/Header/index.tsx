import React from 'react'

import { Container, Text, Name, Wrapper, Image } from './styles'

import ProfileImg from '../../assets/profile.png'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Olá,</Text>
        <Name>Ryan</Name>
      </Wrapper>
      <Image source={ProfileImg} />
    </Container>
  )
}

export default Header
