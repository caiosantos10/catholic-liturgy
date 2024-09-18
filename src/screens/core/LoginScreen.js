import { Text, TextInput, View, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LoginScreen() {
    const userNamePlaceHolder = "Telefone, nome de usuário ou email";
    const passwordPlaceHolder = "Senha";
    const buttonText = "Entrar";

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder={userNamePlaceHolder} />
            <TextInput style={styles.input} placeholder={passwordPlaceHolder} secureTextEntry={true} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const inputWidth = 0.75 * Dimensions.get('window').width;
const buttonWidth = 0.65 * Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingBottom: 150
    },
    title: {
        fontSize: 40,
        marginBottom: 50
    },
    input: {
        height: 35,
        width: inputWidth,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 0,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#007AFF',
        width: buttonWidth,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginTop: 30
    },
    buttonText: {
        color: '#FFF',
    }
})