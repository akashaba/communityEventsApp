import Button from '@/Components/Shared/Button'
import colors from '@/data/colors'
import { useRouter } from 'expo-router'
import React, { Component } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function LandingScreen() {
    const router = useRouter();
    return (
      <View>
        <Image source={require('./../assets/images/Helena.jpeg')}
            style={
                {
                    width: '100%',
                    height: 480,
                }
            }
        />
        <View style={{padding: 20}}> 
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
            }}>Welcome to Helena Community events' Board</Text>

            <Text style={{
                fontSize: 17,
                textAlign: 'center',
                marginTop: 20,
                color: colors.GRAY,
            }}>We are here to help you find events in Helena, Montana</Text>
           <Button text='Get Started' 
           onPress={() => router.push('./(auth)/Signup')}/>

           <Pressable onPress={() => router.push('./(auth)/Signin')}>
            <Text style={{
                fontSize: 17,
                textAlign: 'center',
                marginTop: 20,
                color: colors.GRAY,
            }}>Already have an Account? Sign In here.</Text>
            </Pressable>
        </View>
      </View>
    )
}
