import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const ScrollView = styled.ScrollView`
  flex: 1;
`

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-top: 62px;
  background: ${colors.shape};
`

export const FeatherIcons = styled(Feather)``

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 62px;
  padding-bottom: 32px;
`

export const Title = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.complement};
  font-size: 24px;
  text-align: center;
  margin-bottom: 18px;
  margin-top: 24px;
`

export const Description = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.heading};
  font-size: 17px;
  text-align: center;
  line-height: 25px;
`

export const Image = styled.Image``

export const Section = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${colors.white};
  margin-top: 64px;
  padding-bottom: 32px;
`

export const TipContainer = styled.View`
  background: ${colors.blue_light};
  border-radius: 20px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  position: relative;
  bottom: 60px;
`

export const TipText = styled.Text`
  color: ${colors.blue};
  font-family: ${fonts.text};
  text-align: center;
  line-height: 20px;
  max-width: 170px;
`

export const ScheduleContainer = styled.View`
  align-items: center;
`

export const ScheduleLabel = styled.Text`
  color: ${colors.body_dark};
  font-family: ${fonts.complement};
  font-size: 13px;
  text-align: center;
`

export const DataTimePickerButton = styled.TouchableOpacity`
  background: ${colors.blue_light};
  width: 90%;

  border-radius: 12px;
  justify-content: center;
  align-items: center;

  padding: 12px;
  margin: 16px 0px;
`
export const DataTimePickerButtonText = styled.Text`
  color: ${colors.blue};
  font-family: ${fonts.complement};
  font-size: 17px;
`
