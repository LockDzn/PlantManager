import React from 'react'
import { Animated, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { Feather } from '@expo/vector-icons'
import { SvgFromUri } from 'react-native-svg'

import {
  Container,
  Name,
  Text,
  Hour,
  Time,
  Section,
  ButtonRemoveContainer,
  ButtonRemove,
} from './styles'

import colors from '../../styles/colors'

type Props = {
  data: {
    name: string
    photo: string
    hour: string
  }
  handleRemove: () => void
}

const MyPlantsCard = ({ data, handleRemove }: Props) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <ButtonRemoveContainer>
            <ButtonRemove onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </ButtonRemove>
          </ButtonRemoveContainer>
        </Animated.View>
      )}
    >
      <Container>
        <Section>
          <SvgFromUri uri={data.photo} height={40} width={36} />
          <Name>{data.name}</Name>
        </Section>
        <Hour>
          <Text>Regar às</Text>
          <Time>{data.hour}</Time>
        </Hour>
      </Container>
    </Swipeable>
  )
}

export default MyPlantsCard
