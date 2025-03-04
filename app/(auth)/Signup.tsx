import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '@/data/colors';
import TextInputField from '@/Components/Shared/TextInputField';
import Button from '@/Components/Shared/Button';
import * as ImagePicker from 'expo-image-picker';

export default function Signup() {

  const [fullName, setFullName] = useState<string|undefined>();
  const [email, setEmail] = useState<string|undefined>();
  const [password, setPassword] = useState<string|undefined>();
  const [profileImage, setProfileImage] = useState<string|undefined>();
  const onButtonPress = () => {

  }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };
  return (
    <View style={{
      flex: 1,
      paddingTop: 50,
      padding: 20
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      }}>Create New Account</Text>
      <View style={{
        alignItems: 'center',
        display: 'flex',
      }}>
        <View>
          <TouchableOpacity onPress={pickImage}>
          {profileImage? <Image source={{uri: profileImage}} style={styles.profileImage}/>
          :
        <Image source={require('./../../assets/images/profile.png')} style={styles.profileImage}/>}
        </TouchableOpacity>
          <Ionicons name="camera" size={24} color={colors.PRIMARY} style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}/>
          </View>
      </View>
      <TextInputField label='Full Name' onChangeText={(v)=> setFullName(v)}/>
      <TextInputField label='Email Address' onChangeText={(v)=> setEmail(v)}/>
      <TextInputField label='Password' password={true} onChangeText={(v)=> setPassword(v)}/>


        <Button text='Create Account' onPress={onButtonPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 99,
  }
})
