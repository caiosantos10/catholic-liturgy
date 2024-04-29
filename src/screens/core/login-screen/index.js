import react from "react";
import { Text, TextInput, View, StyleSheet, Dimensions, Button } from "react-native";
import { buttonTitle, passwordPlaceHolder, userNamePlaceHolder } from "./consts";

export default function LoginScreen() {
    return (
        <View>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder={userNamePlaceHolder} keyboardType="text" />
            <TextInput style={styles.input} placeholder={passwordPlaceHolder} secureTextEntry={true} />
            <Button title={buttonTitle}></Button>
        </View>
    );
}

const inputWidth = 0.7 * Dimensions.get('window').width;

const styles = StyleSheet.create({
    title:{
        fontSize: 40,
        marginBottom: 20
    },
    input: {
        height: 40, 
        width: inputWidth,
        borderColor: 'gray', 
        borderWidth: 1, 
        paddingHorizontal: 10,
        marginBottom: 20
    }
})