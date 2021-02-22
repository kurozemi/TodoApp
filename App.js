import React from 'react'
import Home from './src/components/home/Home'
import Detail from './src/components/detail/Detail'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Detail" component = {Detail}/>
        <Stack.Screen name="Home" component={Home}
          options={{
            headerShown: false

          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;