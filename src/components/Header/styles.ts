import styled from 'styled-components/native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`

export const Wrapper = styled.View``

export const Text = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 40px;
`

export const Name = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.complement};
  line-height: 40px;
`

export const Image = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`
