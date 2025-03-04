import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import colors from '@/data/colors'

type TextInputProps = {
    label: string,
    onChangeText: (text: string) => void,
    password?: boolean,
}

export default function TextInputField({label, onChangeText, password}: TextInputProps) {
  return (
    <View style={{marginTop: 10}}>
      <Text style={{color: colors.GRAY}}>{label}</Text>
      <TextInput onChangeText={onChangeText} placeholder={label} 
      style={styles.textInput} secureTextEntry={password}/>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput:{
    padding: 10,
    borderWidth: 0.3,
    borderRadius: 5,
    marginTop: 10,
    fontSize: 17,
  }
})
