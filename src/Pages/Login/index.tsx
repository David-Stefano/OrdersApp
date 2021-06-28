import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Logar } from '../../Services/ExampleAPI';
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Image,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";


export default function Login() {
  const navigation = useNavigation();
  localStorage.clear();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const image = { uri: "https://reactjs.org/logo-og.png" };

  function NovoCadastro() {
    navigation.navigate('Cadastro');
  }

  const auth = (email: string, password: string) => {
    Logar(email, password)
      .then((result) => {


        if (result == null) {
          localStorage.setItem('APITOKEN', result);
          console.log(localStorage.getItem('APITOKEN'));
          Alert.alert(
            'Erro!',
            'Usuário ou senha inválidos.'
          )
        }
        else {
          navigation.navigate('ConsProd');
        }
        return;
      }
      )
  }

  return (

    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    <View style={styles.componentes}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => auth(email, password)}>
        <Text >LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reg_button} onPress={() => NovoCadastro()}>
        <Text style={styles.reg_button}>Novo cadastro</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground> 
      
    </View>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  componentes: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    
  },

  inputView: {
    backgroundColor: "lightgray",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 5,
    marginLeft: 5,
  },

  reg_button: {
    height: 30,
    marginBottom: 30,
    marginTop: 40,
    color: "white",
    size:"20"
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "lightblue",
  },
});
