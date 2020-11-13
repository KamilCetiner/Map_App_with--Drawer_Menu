import React, {useState} from 'react';
import {View, Image, KeyboardAvoidingView, ScrollView, SafeAreaView, Text, Alert} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { Button, Input, CustomSidebarMenu } from '../components';

import {authStyle, button} from '../styles'
import {resolveAuthError} from '../functions'
import auth from '@react-native-firebase/auth';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login() {
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => props.navigation.navigate('Main'))        
          
          .catch((err) => Alert.alert("Google Map", resolveAuthError(err.code)));
        try {
          if (email === '' || password === '') {
            Alert.alert('Google Map', resolveAuthError('auth/null-value'));
          } else {
            await auth().signInWithEmailAndPassword(email, password);
            props.navigation.navigate("Main");
          }
        } catch (error) {
          Alert.alert('Google Map', resolveAuthError(error.code));
        }
      }



    return(

        <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={authStyle.container}>
            <Image
              style={authStyle.logo}
              source={require('../assets/map_photo.jpg')}
            />
          </View>
          <View style={{flex: 1}}>
            <Input
              inputProps={{
                placeholder: 'Type your email address..',
                keyboardType: 'email-address',
              }}
              onValue={(value)=> setEmail(value)}
            />
            <Input
              inputProps={{
                placeholder: 'Type your password..',
                secureTextEntry: true,
              }}
              onValue={(value)=> setPassword(value)}
            />

            <Button title="Sign In" onPress={() => login()} />
            <Button
              title="Sign Up"
              noBorder
              onPress={() => props.navigation.navigate('Sign')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export {Login}