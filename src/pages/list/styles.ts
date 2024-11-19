import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
    boxList: {
        flex: 1,
        width: '100%',
    },
    card: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        marginTop: 6,
        borderRadius: 10,
        justifyContent: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: themes.colors.lightGray
    },
    rowCard: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowCardLeft: {
        width: '70%',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    titleCard: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    descriptionCard: {
        color: themes.colors.gray
    }
})