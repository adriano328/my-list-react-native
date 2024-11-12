import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'red'
    },
    header: {
        width: '100%',
        height: Dimensions.get('window').height/5,
        backgroundColor: themes.colors.primary,
        paddingHorizontal: 25,
        justifyContent: 'center'
    },
    greeting: {
        fontSize: 20,
        color: '#ffff',
        marginTop: 40,
    },
    boxInput: {
        width: '95%'
    },
})