import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themes.colors.transparent
    },
    container: {
        width: '80%',
        padding: 16,
        backgroundColor: '#fff',
        elevation: 5,
        alignItems: 'center'
    },
    dateText: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center'
    }
})