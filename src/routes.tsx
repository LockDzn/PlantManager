import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import colors from './styles/colors'

import Welcome from './pages/Welcome'
import UserIdentification from './pages/UserIdentification'
import Confirmation from './pages/Confirmation'
import PlantSelect from './pages/PlantSelect'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.white,
          },
        }}
      >
        <AppStack.Screen name="Welcome" component={Welcome} />
        <AppStack.Screen
          name="UserIdentification"
          component={UserIdentification}
        />
        <AppStack.Screen name="Confirmation" component={Confirmation} />
        <AppStack.Screen name="PlantSelect" component={PlantSelect} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
