import React from 'react'
import { View , Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

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
