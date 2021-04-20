import styled from 'styled-components/native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
`

export const Header = styled.View`
  align-items: center;
  margin-bottom: 32px;
`

export const Emoji = styled.Text`
  font-size: 32px;
`

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
`

type InputProps = {
  isFocused: Boolean
  isFailed: Boolean
}

export const Input = styled.TextInput<InputProps>`
  font-size: 17px;
  font-family: ${fonts.heading};
  text-align: center;
  border-bottom-color: ${(props) =>
    props.isFocused || props.isFailed ? colors.green : colors.gray};
  border-bottom-width: 1px;
  padding: 1px 64px;
  margin-bottom: 64px;
`
