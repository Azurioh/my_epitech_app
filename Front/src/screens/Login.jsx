import { Text, View, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

function LoginScreen({ navigation }) 
{
    const [token, setToken] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function navigateToHelp() 
    {
        navigation.navigate({ name: 'help' });
        return;
    }

    function navigateToHome() 
    {
        navigation.replace('accueil')
    }

    async function handleLogin() 
    {
        let newToken = token;

        setErrorMessage('');
        if (token.length === 0) {
            setErrorMessage('Aucun token n\'a été indiqué');
            return;
        }
        newToken = newToken.replace('"', '');
        newToken = newToken.replace('"', '');
        try {
            const response = await fetch('https://api.epitest.eu/me/2023', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${newToken}`,
                    'content-type': 'application/json'
                },
            });
            if (response.status === 401) {
                setErrorMessage('Le token indiqué est invalide, veuillez réessayer');
            } else if (response.status === 200) {
                navigateToHome();
            } else {
                setErrorMessage('Une erreur est survenue');
            }
        } catch (err) {
            console.error(err);
            setErrorMessage('Impossible de se connecter aux serveurs, veuillez vérifier votre connexion internet');
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>CONNEXION</Text>
                <TextInput
                    placeholder="Veuillez entrer votre token"
                    placeholderTextColor="black"
                    style={styles.input}
                    value={token}
                    onChangeText={text => setToken(text)}
                />
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleLogin} style={styles.button}>
                        <Text style={styles.buttonText}>SE CONNECTER</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigateToHelp()}>
                    <Text style={styles.help}>Comment récupérer son token ?</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        position: 'absolute',
        top: 50,
        width: "80%",
        height: 100,
    },
    title: {
        fontWeight: "700",
        fontSize: 30,
        paddingBottom: 20,
    },
    inputContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        borderRadius: 10,
    },
    errorMessage: {
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
        color: 'red',
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        borderRadius: 10,
        margin: 20,
        width: '100%',
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: 'blue',
        width: '100%',
        padding: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    help: {
        marginTop: 20,
        color: 'blue',
        fontSize: 16
    }
})

export default LoginScreen;
