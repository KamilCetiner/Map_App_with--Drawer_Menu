import React, {useState} from 'react';
import {View, Image, KeyboardAvoidingView, ScrollView, SafeAreaView, Text, Alert} from 'react-native'
import { Button, Input } from '../components';

import {authStyle, button} from '../styles'
import {resolveAuthError} from '../functions'
import auth from '@react-native-firebase/auth';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login() {
        console.log(email, password)
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => alert("OK"))
          .catch((err) => Alert.alert("ClarusChat", resolveAuthError(err.code)));
        try {
          if (email === '' || password === '') {
              console.log(email)
            Alert.alert('ClarusChat', resolveAuthError('auth/null-value'));
          } else {
            await auth().signInWithEmailAndPassword(email, password);
            props.navigation.navigate("Sign");
          }
        } catch (error) {
          Alert.alert('ClarusChat', resolveAuthError(error.code));
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
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export {Login}