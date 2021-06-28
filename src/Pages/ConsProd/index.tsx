import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { getProd } from '../../Services/ExampleAPI';

export default function ConsProd({ navigation }: any) {
    const [prd, setPrd] = useState();

    const Image = { uri: "https://reactjs.org/logo-og.png" };


    useEffect(() => {
        getProd().then((items) => setPrd(items));
    }, [])

    if (prd != null){
        return (


            <View style={styles.container}>
                        <FlatList
                            numColumns={2}
                            data={prd}
                            keyExtractor={(product) => product.id.toString()}
                            renderItem={({ item, index }) => (
                                <View style={styles.card}>
                                    <Text>{item.name}</Text>
                                    <Text>Fabricante: {item.factory.name}</Text>
                                    <View>
                                        <Text>Unitário: R${item.price.toFixed(2).replace('.', ',')} </Text>
                                    </View>
                                    <Text>Disponível: {item.amount}</Text>
                                </View>
                            )}
                        />
            </View>
        );
    }else{
        return(<Text>Nada a exibir por aqui</Text>);
    }
}
;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },

    card: {
        backgroundColor: "lightgray",
        padding: 20,
        borderRadius: 10,
        borderColor: "black",
        borderStyle: "solid",
        marginLeft:12,
        marginBottom: 20,
        marginTop: 50
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",

    },
});