import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        padding: 40,
        width: '90%',
        borderColor: '#cecece',
        borderWidth: 1,
        borderRadius: 8,
    },
    containerCampo: {
        marginBottom: 20
    },
    containerCamera: {
        borderColor: '#cecece',
        borderWidth: 1,
        height: 50,
        borderRadius: 8,
    },
    camera: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: '#cecece'
    },
    containerBotao: {
        marginTop: 30,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignSelf: 'center'
    }
});