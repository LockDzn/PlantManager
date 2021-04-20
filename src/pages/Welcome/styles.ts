import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 62px;
`

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  font-family: 'Jost_400Regular';
  line-height: 34px;
`

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 16px;
  padding: 0 20px;
  color: ${colors.heading};
`

export const Image = styled.Image`
  width: 292px;
  height: 284px;
`

export const Touch = styled.TouchableOpacity`
  background: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`

export const ArrowIcon = styled(Feather)`
  font-size: 32px;
  color: #fff;
`
