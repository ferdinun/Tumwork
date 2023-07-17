import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

export default function Signup({ navigation }) {
  // เปลี่ยนชิ่อหน้าตรงนี้พิมใหญ่เท่านั้น
 



  const goLogin = () => {
    console.log("loooo");
    navigation.navigate("Login");
  };

  return (
    <>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={require("../../assets/dd.jpg")}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
        <View
          style={{
            alignItems: "center",
            width: "90%",
            height: 65,
            borderWidth: 5,
            borderRadius: 20,
            marginBottom: 20,
            marginTop: 80,
            borderColor: "white",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Name</Text>
          <TextInput
            onChangeText={(text) => setName(text)}
            placeholder={"Name"}
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
          <Text style={{ fontSize: 20, color: "white" }}>Lastname</Text>
          <TextInput
            onChangeText={(text) => setLastname(text)}
            placeholder={"Lastname"}
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
          <Text style={{ fontSize: 20, color: "white" }}>Password</Text>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder={"Password"}
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
          <Text style={{ fontSize: 20, color: "white" }}>ComfirmPassword</Text>
          <TextInput
            onChangeText={(text) => setComfirmPassword(text)}
            placeholder={"ComfirmPassword"}
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
          onPress={() => goLogin()}
        >
          <Text style={{ fontSize: 20, color: "skyblue" }}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
