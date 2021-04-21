import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  flex: 1;
  padding-top: 64px;
  background: ${colors.background};
`

export const Text = styled.Text`
  font-size: 17px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  line-height: 18px;
`

export const SpotlightText = styled.Text`
  font-size: 17px;
  font-family: ${fonts.complement};
  color: ${colors.heading};
  margin-top: 20px;
`

export const Section = styled.View`
  padding: 0 30px;
`

export const View = styled.View``

export const FlatList = styled.FlatList``

export const Plants = styled.View`
  flex: 1;
  padding: 0 32px;
  justify-content: center;
`

export const OtherStyles = StyleSheet.create({
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
  plantList: {},
})
