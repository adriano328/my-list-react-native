import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";
export const styles = StyleSheet.create({
    boxInput: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: themes.colors.lightGray,
        borderColor: themes.colors.lightGray,
        marginBottom: 20
    },
    input: {
        width: '90%',
        height: '100%',
        borderRadius: 40,
        paddingLeft: 5
    },
    titleInput: {
        marginLeft: 5,
        color: themes.colors.gray,
    },
    Icon: {
        width: '100%'
    },
    Button: {
        width: '10%'
    }
})