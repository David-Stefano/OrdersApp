import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { cadUsu } from '../../services/ExampleApi';
import User from '../../models/Usu';
import { StatusBar } from "expo-status-bar";
import NumericInput from 'react-native-numeric-input'
import {
    StyleSheet,
    Text,
    Image,
    ImageBackground,
    View,
    TextInput,
    Alert,
    TouchableOpacity,
} from "react-native";


export default function cadUser() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    
  const Image = { uri: "https://reactjs.org/logo-og.png" };

    function onSubmit(): void {
        let user: User = {
            name: '',
            age: 0,
            address: '',
            email: '',
            userPassword: '',
        };
        user.name = name;
        user.address = address;
        user.email = email;
        user.userPassword = userPassword;
        user.age = age;

        cadUsu(user)
            .then((result) => {
                console.log(result);

                if (!result) {
                    Alert.alert(
                        'Erro!',
                        'Não foi possível realizar o cadastro.'
                    );
                    return;
                }

                Alert.alert(
                    'Sucesso',
                    'Cadastro concluído com sucesso'
                );
                navigation.navigate('ConsProd');
            })
            .catch((error) => {
                console.error(error);
                Alert.alert(
                    'Erro!',
                    'Não foi possível realizar o cadastro.')
            });
    }



    return (

        <View style={styles.container}>

        <ImageBackground source={Image} style={styles.image}>
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
                    onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Nome."
                    placeholderTextColor="#003f5c"
                    onChangeText={(name) => setName(name)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Idade"
                    keyboardType = 'numeric'
                    placeholderTextColor="#003f5c"
                    onChangeText={(age) => setAge(age)}
                />
            </View>
            


            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Endereço."
                    placeholderTextColor="#003f5c"
                    onChangeText={(address) => setAddress(address)}
                />
            </View>


            <TouchableOpacity style={styles.loginBtn}
                onPress={onSubmit}
            >
                <Text >Cadastrar</Text>
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
        width: "70%",
        height: 45,
        marginBottom: 20
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
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
