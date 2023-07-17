import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";

export default function Firstscreen({ navigation }) {
  const goLogin = () => {
    console.log("loooo");
    navigation.navigate("Login");
  };
  const goSignup = () => {
    console.log("loooo");
    navigation.navigate("Signup");
  };
  // เปลี่ยนชิ่อหน้าตรงนี้พิมใหญ่เท่านั้น
  return (
    <>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../assets/dd.jpg")}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />

        <View style={{ marginTop: 200, alignItems: "center", zIndex: 20 }}>
          <Text style={{ fontSize: 50, color: "white" }}>สวัสดีทุกคน</Text>
          <Text style={{ fontSize: 50, color: "white" }}>เชิญครับ</Text>
        </View>
        <View
          style={{
            marginTop: 70,
            alignItems: "center",
            zIndex: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: 120,
              height: 50,
              alignItems: "center",
              borderRadius: 25,
              justifyContent: "center",
            }}
            onPress={() => goSignup()}
          >
            <Text style={{ fontSize: 20, color: "skyblue" }}>signup</Text>
          </TouchableOpacity>

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
            onPress={() => goLogin()}
          >
            <Text style={{ fontSize: 20, color: "skyblue" }}>login</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 370,
            height: 570,
            marginTop: -350,
            marginLeft: 11.5,
            borderTopLeftRadius: 27.5,
            borderTopRightRadius: 27.5,
            backgroundColor: "skyblue",
            opacity: 0.6,
            zIndex: 7,
          }}
        ></View>
      </View>
    </>
  );
}
