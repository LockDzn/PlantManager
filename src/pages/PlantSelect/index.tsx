import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import EnvironmentButton from '../../components/EnvironmentButton'
import Header from '../../components/Header'
import PlantCardPrimary from '../../components/PlantCardPrimary'
import Load from '../../components/Load'

import {
  Container,
  Text,
  SpotlightText,
  Section,
  FlatList,
  OtherStyles,
  Plants,
  View,
} from './styles'

type EnvironmentProps = {
  key: string
  title: string
}
type PlantProps = {
  id: string
  name: string
  about: string
  water_tips: string
  photo: string
  environments: string[]
  frequency: {
    times: number
    repeat_every: string
  }
}

const PlantSelect = () => {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([])
  const [plants, setPlants] = useState<PlantProps[]>([])
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([])
  const [selectedEnvironment, setSelectedEnvironment] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get(
        `plants_environments?_sort=title&_order=asc`
      )
      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ])
    }

    fetchEnvironment()
  }, [])

  useEffect(() => {
    fetchPlant()
  }, [])

  async function fetchPlant() {
    const { data } = await api.get(`plants?_sort=name&_order=asc`)
    if (!data) return setLoading(false)
    setPlants(data)
    setFilteredPlants(data)

    setLoading(false)
  }

  function handleSelectEnvironment(environmentKey: string) {
    setSelectedEnvironment(environmentKey)

    if (environmentKey === 'all') {
      return setFilteredPlants(plants)
    } else {
      const filtered = plants.filter((plant) =>
        plant.environments.includes(environmentKey)
      )

      return setFilteredPlants(filtered)
    }
  }

  if (loading) {
    return <Load />
  }

  return (
    <Container>
      <Header />
      <Section>
        <SpotlightText>Em qual hambiente</SpotlightText>
        <Text>você quer colocar sua planta?</Text>
      </Section>
      <View>
        <FlatList
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton
              key={item.key}
              title={item.title}
              actived={selectedEnvironment === item.key}
              onPress={() => handleSelectEnvironment(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={OtherStyles.environmentList}
        />
      </View>

      <Plants>
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={OtherStyles.plantList}
        />
      </Plants>
    </Container>
  )
}

export default PlantSelect
