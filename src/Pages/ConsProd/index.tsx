import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { getProd } from '../../Services/ExampleAPI';

export default function ConsProd({ navigation }: any) {
    const [prd, setPrd] = useState(Object);

    const Image = { uri: "https://reactjs.org/logo-og.png" };


    useEffect(() => {
        getProd().then((items) => setPrd(items));
    }, [])

    return (


        <View style={styles.container}>
            
                <View >
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
        </View>
    );
}
;
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
    card: {
        backgroundColor: "lightgray",
        padding: "20px",
        borderradius: "10px",
        border: "2px",
        bordercolor: "black",
        borderstyle: "solid",
        marginLeft:"12px",
        marginBottom: "20px"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",

    },
});