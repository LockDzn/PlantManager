import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.TouchableOpacity`
  background: ${colors.shape};
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  width: 100%;
  height: 80px;
  border-radius: 20px;
  flex-direction: row;
  margin-bottom: 12px;
`

export const Name = styled.Text`
  color: ${colors.body_dark};
  font-family: ${fonts.complement};
  font-size: 17px;
  align-items: center;
  margin-left: 18px;
`

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Hour = styled.View``

export const Text = styled.Text`
  color: ${colors.body_light};
  font-family: ${fonts.complement};
  font-size: 13px;
  align-items: center;
`

export const Time = styled.Text`
  color: ${colors.body_dark};
  font-family: ${fonts.complement};
  font-size: 13px;
  text-align: right;
`

export const ButtonRemoveContainer = styled.View`
  align-items: center;
  justify-content: center;
`

export const ButtonRemove = styled(RectButton)`
  width: 100px;
  height: 80px;
  background: ${colors.red};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 20px;
`
