import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Metanas_ui_design from './src/screens/Metanas_ui_design/MetanasUiDesign.jsx'
import MembersModel from './src/components/MembersModal/membersModel.jsx'
import WorkSpace from './src/screens/WorkSpace/WorkSpace.jsx'
import CreateExpense from './src/components/Createexpense/createExpense.jsx'
import Doccument from './src/screens/DocumentScreen/doccument.jsx'
import FolderPage from './src/screens/Folder/folderPage.jsx'
const Stack =createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Metanas" component={Metanas_ui_design}/>
            <Stack.Screen name="WorkSpace" component={WorkSpace} />
            <Stack.Screen name="CreateExpense" component={CreateExpense} />
            <Stack.Screen name="Doccument" component={Doccument}/>
            <Stack.Screen name="Folder" component={FolderPage} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})