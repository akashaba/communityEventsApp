import { View, Text, Image, Pressable, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import TextInputField from '@/Components/Shared/TextInputField'
import Button from '@/Components/Shared/Button'
import colors from '@/data/colors'
import { useRouter } from 'expo-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/config/Firebase'

export default function Signin() {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const router = useRouter();
  const onSignInBtnClick = () => {
    if (!email || !password) {
      ToastAndroid.show('Enter Email and Password', ToastAndroid.BOTTOM);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
    .then((resp) => {
      if(resp.user){
        // router.push('/landing');
        console.log('User Logged In: '+ resp.user);
      }
    })
    .catch((error) => {})
  }
  return (
    <View style={{
      padding: 20,
      paddingTop: 20,
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
        }}>  
      <Image source={require('./../../assets/images/logo1.png')} style={{
        width: 200,
        height: 200,
      }}/>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
      }}>Sign in to Helena Community Events</Text>
      </View>
      <TextInputField label='Email Address' onChangeText={(v)=>setEmail(v)}/>
      <TextInputField label='Password' password={true}  onChangeText={(v)=>setPassword(v)}/> 
        <Button text='Sign In' onPress={()=>onSignInBtnClick()}/> 

          <Pressable onPress={() => router.push('./(auth)/Signup')}>
                      <Text style={{
                          fontSize: 17,
                          textAlign: 'center',
                          marginTop: 20,
                          color: colors.GRAY,
                      }}>New here? Please signup.</Text>
                      </Pressable>
    </View>
  )
}