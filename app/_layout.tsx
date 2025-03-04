import { Stack } from "expo-router";

export default function RootLayout() {
  return (
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
          title: 'Signup',
          
        }
      }/>
    </Stack>
  )
}
