import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

import { Container, Text } from './styles'

interface PlantProps extends RectButtonProps {
  data: {
    name: string
    photo: string
  }
}

const PlantCardPrimary = ({ data, ...rest }: PlantProps) => {
  return (
    <Container {...rest}>
      <SvgFromUri width={70} height={70} uri={data.photo} />
      <Text>{data.name}</Text>
    </Container>
  )
}

export default PlantCardPrimary
