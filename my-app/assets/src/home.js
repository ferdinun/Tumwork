import { React, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from "react-native";

export default function Home({ route, navigation }) {
  // เปลี่ยนชิ่อหน้าตรงนี้พิมใหญ่เท่านั้น
  
  const [name, setName] = useState("")

  const ChechName = () => {
    console.log('user',name);

    let non = 'bbb'

    if (name != non ){
      alert("รหัสผิดนะพี่บ่าว")
    } 
    else if (name == non ){
      alert("รหัถูกพี่บ่าว")
    }
  }
  

  const params = route.params;
  const รับถุงยุส = params.ถุง || "";
  const รับถุงยุส2 = params.ถุง2;

  console.log("ยุส> ", รับถุงยุส);
  console.log("ยุส2> ", รับถุงยุส2);

  const closedmodal = () => {
    setModalFerdinun(false);
  };
  
  const openmodal = () => {
    setModalFerdinun(true);
  };

  const modal = () => {
    return (
      <>
        <View style={{marginTop:200}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalFerdinun}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalFerdinun);
            }}
          >
            <View
              style={{
                flex: 1,
                //backgroundColor: "red",
                // height: 50,
                // width: 100,
                // marginLeft: 50,
              }}
            >
              
              <View
                style={{
                  // flex: 1,
                  backgroundColor: "white",
                  height: 150,
                  width: 200,
                  marginTop: 200,
                  marginLeft: 100,
                  //borderWidth: 5,
                  borderRadius: 20,
                  // marginLeft: 50,
                  opacity:0.8,
                }}
              >
               
                <TouchableOpacity
                onPress={() => closedmodal()}
                >
                
                  <Text style={{marginLeft:180,marginTop:10}}>X</Text>
                </TouchableOpacity>
                <Text style={{marginLeft:55,marginTop:20}}>จะให้ป้อนอะไรดี</Text>
                <View
              style={{
                alignItems: "center",
                width: "90%",
                height: 65,
                borderWidth: 5,
                borderRadius: 20,
                marginBottom: 20,
                borderColor: "skyblue",
                marginLeft:10,
                marginTop:10
              }}
            >
              <Text style={{}}></Text>
              <TextInput
                onChangeText={(text) => setName(text)}
                placeholder={"ป้อนข้อความสิพี่บ่าว"}
              />
              </View>
              </View>
              <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 70,
            height: 30,
            alignItems: "center",
            borderRadius: 25,
            justifyContent: "center",
            marginLeft:165,
            marginTop:10
          }}
          onPress={() => ChechName()}

        >
          <Text style={{ fontSize: 15, color: "skyblue" }}>SUBMIT</Text>
        </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </>
    );
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        {modal()}
        <Image
          source={require("../../assets/dd.jpg")}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
        {รับถุงยุส === "aaa" ? (
          <Text style={{ fontSize: 20, color: "white" }}>{รับถุงยุส}</Text>
        ) : (
          <Text style={{ fontSize: 20, color: "white" }}>{รับถุงยุส}</Text>
        )}

        {รับถุงยุส2 === "aaa" ? (
          <TouchableOpacity onPress={() => openmodal()}>
            <Text style={{ fontSize: 50, color: "white" }}>{รับถุงยุส2}</Text>
          </TouchableOpacity>
        ) : (
          <Text style={{ fontSize: 20, color: "white" }}>{รับถุงยุส2}</Text>
        )}
      </View>
    </>
  );
}
