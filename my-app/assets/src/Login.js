import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";

export default function Login({navigation}) {
  // เปลี่ยนชิ่อหน้าตรงนี้พิมใหญ่เท่านั้น
  const gohome = () => {
    console.log("loooo");
    navigation.navigate("Home");
  };
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const ChechEmail = () => {
  console.log('user',email);
  console.log('pass',password);

  let nanan = 'aaa'
  let password11 = 'aaa'
if (email != nanan && password != password11){
  alert("รหัสผิดคู่นะพี่บ่าว")
} 
else if (email == nanan && password != password11){
  alert("รหัสผิดพี่บ่าว")
}
else if (email != nanan&& password == password11){
  alert("อีเมลผิดพี่บ่าว")
}
else {
  navigation.navigate("Home",{ถุง:nanan,ถุง2:password11});
}

}

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <Image
          source={require("../../assets/dd.jpg")}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? 0 : "position"}
            style={{}}
          >
            
        <View
          style={{
            marginTop: 180,
            alignItems: "center",
          }}
        >
            <View
              style={{
                alignItems: "center",
                width: "90%",
                height: 65,
                borderWidth: 5,
                borderRadius: 20,
                marginBottom: 20,
                borderColor: "white",
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Email</Text>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                placeholder={"Email"}
              />
            </View>

          <View
            style={{
              alignItems: "center",
              width: "90%",
              height: 65,
              borderWidth: 5,
              borderRadius: 20,
              marginBottom: 20,
              borderColor: "white",
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>password</Text>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              placeholder={"password"}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: 120,
              height: 50,
              alignItems: "center",
              borderRadius: 25,
              justifyContent: "center",
              marginTop: 20,
            }}
            onPress={() => ChechEmail()}
          >
            <Text style={{ fontSize: 20, color: "skyblue" }}>LOGIN</Text>
          </TouchableOpacity>

        </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
}
