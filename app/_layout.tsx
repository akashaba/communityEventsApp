import { AuthContext } from "@/context/AuthContext";
import { Stack } from "expo-router";
import React, { useState } from "react";

interface USER{
  id: number,
  name: string,
  email: string,
  image: string,
}

export default function RootLayout() {
  const [user, setUser] = useState<USER |undefined>(undefined)
  return (
    <AuthContext.Provider value={{user, setUser}}>
    <Stack>
      <Stack.Screen name='landing'
        options={
          {
            headerShown: false,
          }
        }
      />
      <Stack.Screen name='(auth)/Signup' 
      options={
        {
          headerTransparent: true,
          headerTitle: '',
        }
      }/>
      <Stack.Screen name='(auth)/Signin' 
      options={
        {
          headerTransparent: true,
          headerTitle: '',
        }
      }/>
    </Stack>
    </AuthContext.Provider>
  )
}
