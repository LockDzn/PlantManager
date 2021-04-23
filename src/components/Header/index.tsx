import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Container, Text, Name, Wrapper, Image } from './styles'

import ProfileImg from '../../assets/profile.png'

type Props = {
  page: 'MyPlants' | 'PlantSelect'
}

const Header = ({ page }: Props) => {
  const [name, setName] = useState('')

  useEffect(() => {
    async function getUserName() {
      const userName = await AsyncStorage.getItem('@plantmanager:username')
      setName(userName || '')
    }

    getUserName()
  }, [])

  return (
    <Container>
      <Wrapper>
        {page == 'PlantSelect' && (
          <>
            <Text>Olá,</Text>
            <Name>{name}</Name>
          </>
        )}
        {page == 'MyPlants' && (
          <>
            <Text>Minhas</Text>
            <Name>Plantinhas</Name>
          </>
        )}
      </Wrapper>
      <Image source={ProfileImg} />
    </Container>
  )
}

export default Header
