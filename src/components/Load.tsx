import React from 'react'
import styled from 'styled-components/native'

import LottieView from 'lottie-react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import loadAnimation from '../assets/load.json'

const Load = () => {
  return (
    <Container>
      <LottieAnimationView source={loadAnimation} autoPlay loop />
    </Container>
  )
}

export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const LottieAnimationView = styled(LottieView)`
  background: transparent;
  width: 200px;
  height: 200px;
`

export default Load
