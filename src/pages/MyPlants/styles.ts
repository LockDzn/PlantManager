import styled from 'styled-components/native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  flex: 1;
  padding-top: 62px;
  background: ${colors.white};
`

export const Section = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 52px;
  padding: 0 32px;
`

export const Image = styled.Image``

export const TipContainer = styled.View`
  background: ${colors.blue_light};
  border-radius: 20px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  margin-bottom: 52px;
`

export const TipText = styled.Text`
  color: ${colors.blue};
  font-family: ${fonts.text};
  text-align: center;
  line-height: 20px;
  max-width: 170px;
`

export const Title = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.complement};
  font-size: 24px;
  align-self: flex-start;
`

export const FlatList = styled.FlatList`
  width: 100%;
  margin-top: 24px;
`
