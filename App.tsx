import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Metanas_ui_design from './src/screens/Metanas_ui_design/Metanas_ui_design.jsx'
import MembersModel from './src/components/Membersmodel.jsx'
import WorkSpace from './src/screens/WorkSpace/WorkSpace.jsx'
import CreateExpense from './src/components/Createexpense.jsx'
const Stack =createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Metanas" component={Metanas_ui_design}/>
            <Stack.Screen name="WorkSpace" component={WorkSpace} />
            <Stack.Screen name="CreateExpense" component={CreateExpense} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})