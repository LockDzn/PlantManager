import React from 'react'
import { StatusBar } from 'expo-status-bar'

import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost'

import Routes from './src/routes'

const App = () => {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Routes />
    </>
  )
}

export default App
