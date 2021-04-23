import React from 'react'
import { RectButtonProps, RectButton } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

import { Container, Text } from './styles'

interface PlantProps extends RectButtonProps {
  data: {
    name: string
    photo: string
  }
  handleRemove: () => void
}

const PlantCardPrimary = ({ data, handleRemove, ...rest }: PlantProps) => {
  return (
    <Container {...rest}>
      <SvgFromUri width={70} height={70} uri={data.photo} />
      <Text>{data.name}</Text>
    </Container>
  )
}

export default PlantCardPrimary
