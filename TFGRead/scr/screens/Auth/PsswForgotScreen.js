import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,Alert 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import {handleReset} from "../../hooks/Auth/Auth"

const PsswForgotScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const handleGoBack = () => {
   navigation.navigate("login");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.headerBar}>
      {/* Registro Texto */}
      <View style={styles.headName}>
        <TouchableOpacity style={styles.goBack}  onPress={handleGoBack}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={40}
            color="white"
          />
        </TouchableOpacity>
        <Text style={styles.fontIncioSesion}>Cambiar contraseña </Text>
      </View>
      <View style={styles.imageContainer}>
        {/* Imagen*/}
        <Image
          style={styles.image}
          source={require("../../../assets/logo.png")}
        />
      </View>
      {/* Form de Registro */}
      <View style={styles.inputContainer}>
        {/* Email de Registro */}
        <View>
          <Text style={{ marginLeft: 30,color:"black" }}> Email del usuario </Text>
          <View style={styles.inputContainerImage}>
            <AntDesign
              name="user"
              style={{ position: "absolute", left: 10 }}
              size={20}
              color="#05668D"
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor="black"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />
          </View>
        </View>
      </View>
      {/* Botón Reset*/}
      <View
        style={{
          display: "flex",
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={styles.buttonReset} onPress={e=>handleReset(email)}>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>
            Reinicia la contraseña
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerBar: {
    flex: 1,
    backgroundColor: "white",
  },
  headName: {
    height: "15%",
    backgroundColor: "#05668D",
    borderBottomRightRadius: 500,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  goBack: {
    marginLeft: 30,
    marginTop: 20,
    marginRight: 5,
  },
  fontIncioSesion: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    marginRight: 90,
    marginTop: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
  imageContainer: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
    borderWidth: 3,
    backgroundColor: "white",
    borderColor: "#679436",
  },
  inputContainerImage: {
    justifyContent: "center",
  },
  input: {
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    color:"black"
  },
  buttonReset: {
    width: "50%",
    marginTop: 20,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 20,
    borderColor: "#679436",
    borderWidth: 3,
    alignItems: "center",
    marginBottom: 10,
  },
});
export default PsswForgotScreen;
