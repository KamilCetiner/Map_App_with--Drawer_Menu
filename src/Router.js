import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Main from './Main';
import {CustomSidebarMenu} from './components';
import {Login, Sign} from './pages'


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
      <Stack.Navigator >
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


function secondScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Login"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'red', //Set Header color
          height : Dimensions.get('window').height / 13,
        },
      
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login', //Set Header Title
          
        }}
      />
      
     

    </Stack.Navigator>
  );
}
function thirdScreenStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'red', //Set Header color
          height : Dimensions.get('window').height / 13,
        },
      
      }}>
      <Stack.Screen
        name="Sign"
        component={Sign}
        options={{
          title: 'Sign In', //Set Header Title
          
        }}
      />

    </Stack.Navigator>
  );
}



function App(props) {
  return (
    <NavigationContainer  >
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

        <Drawer.Screen
          name="Login"
          options={{ drawerLabel: 'Login'}}
          component={secondScreenStack} />
       
        <Drawer.Screen
          name="Sign"
          options={{ drawerLabel: 'Sign'}}
          component={thirdScreenStack} />
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

