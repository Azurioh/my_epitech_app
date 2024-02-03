import { KeyboardAvoidingView, Text, View } from "react-native";

function HomePage({ route }) {
    return (
        <KeyboardAvoidingView>
            <View>
                <Text>Home page</Text>
            </View>
        </KeyboardAvoidingView>
    );
}

export default HomePage;
