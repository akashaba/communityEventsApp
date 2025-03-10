import { auth } from "@/config/Firebase";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import { Redirect } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const {user, setUser} = useContext(AuthContext);
  onAuthStateChanged(auth, async(userdData) => {
    if (userdData && userdData?.email) {
      const user = await axios.get('http://192.168.0.103:8081/user?email='+userdData?.email);
        console.log(user);
        setUser(user?.data);
    }
  });
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Redirect href={'/landing'}/>
    </View>
  );
}
