import { Text, TextInput, View, StyleSheet, Dimensions, Button } from "react-native";
import { buttonTitle, passwordPlaceHolder, userNamePlaceHolder } from "./consts";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
    const navigation = useNavigation();

    return (
        <View>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder={userNamePlaceHolder} />
            <TextInput style={styles.input} placeholder={passwordPlaceHolder} secureTextEntry={true} />
            <Button title={buttonTitle} onPress={() => navigation.navigate('Main')} />
        </View>
    );
}

const inputWidth = 0.7 * Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
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