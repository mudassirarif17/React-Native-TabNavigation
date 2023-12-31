// To change the icon of react native android app go to android/app/src/main/res
import React from 'react'
import { View , Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}
const Chat = () =>{
  return(
    <View style={{flex : 1, justifyContent : "center" , alignItems : "center"}}>
      <Text style={{fontSize : 30}}>Chat</Text>
    </View>
  )
}
const Calls = () =>{
  return(
    <View style={{flex : 1, justifyContent : "center" , alignItems : "center"}}>
      <Text style={{fontSize : 30}}>Calls</Text>
    </View>
  )
}
const Status = () =>{
  return(
    <View style={{flex : 1, justifyContent : "center" , alignItems : "center"}}>
      <Text style={{fontSize : 30}}>Status</Text>
    </View>
  )
}
export default App;
