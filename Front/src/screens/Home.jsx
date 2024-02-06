import { KeyboardAvoidingView, StyleSheet, View } from "react-native";

function HomePage({ navigation }) {
    return (
        <KeyboardAvoidingView>
            <View style={styles.header}>
                <View style={styles.headerDate}>

                </View>
                <View style={styles.category}>

                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.item}>
                    <View style={styles.info}>

                    </View>
                    <View style={styles.percentage}>

                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    headerDate: {
        backgroundColor: '#0076E3',
        width: '100%',
        flex: 1,
    },
    category: {
        backgroundColor: '#004DE3',
        width: '100%',
        flex: 1,
    },
    container: {
        width: '100%',
        backgroundColor: 'rgb(230, 230, 230)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        width: '95%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    }
})

export default HomePage;
