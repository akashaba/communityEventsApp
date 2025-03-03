import colors from '@/data/colors'
import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type ButtonProps = {
    text: string,
    onPress: () => void,
}

export default function Button ({text, onPress}: ButtonProps) {
    return (
        <TouchableOpacity 
            onPress={onPress}
        style={{
            padding: 20,
            backgroundColor: colors.PRIMARY,
            marginTop: 15,
            borderRadius: 15,
        }}>
            <Text style={{
                fontSize: 17,
                color: colors.WHITE,
                textAlign: 'center',
            }}>{text}</Text>
        </TouchableOpacity>
    )
  }

