import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Main from './Main';
import {CustomSidebarMenu} from './components';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            margin: 10
          }}
        />
      </TouchableOpacity> 
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: '', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
              headerTransparent: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
         
          }}
        />
      </Stack.Navigator>
  );
}



function App(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: 'blue',
          activeBackgroundColor:'#e3f2fd',
          
          itemStyle: { marginVertical: 5, },
        }}
          drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Main"
          options={{ drawerLabel: 'Main'}}
          component={firstScreenStack} />
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
