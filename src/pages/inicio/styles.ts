import { Dimensions, StyleSheet, TextInput } from "react-native";




export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
    },
    nome: {
        height: Dimensions.get('window').height/8,
    },
    nomeEstilo: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    textInput: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 3,
        width: '100%',
        height: 30,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginVertical: 10,
        fontSize: 13,
    },
    textInputDescricao: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 3,
        width: '100%',
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginVertical: 10,
        fontSize: 13,
    },
    boxProduto: {
        height: Dimensions.get('window').height/18,
        width: '100%',
        paddingLeft: 55,
        paddingRight: 55,
    },
    boxCategoria: {
        height: Dimensions.get('window').height/18,
        width: '100%',
        paddingLeft: 55,
        paddingRight: 55,
    },
    boxSubCateg: {
        height: Dimensions.get('window').height/18,
        width: '100%',
        paddingLeft: 55,
        paddingRight: 55,
    },
    boxPreco: {
        height: Dimensions.get('window').height/18,
        width: '100%',
        paddingLeft: 55,
        paddingRight: 55,
    },
    boxDescricao: {
        height: Dimensions.get('window').height/18,
        width: '100%',
        paddingLeft: 55,
        paddingRight: 55,
    },
    boxRegistrar: {
        height: 40,
        borderWidth: 1,
        marginTop: 30,
        fontSize: 13,
        flexDirection: 'row',
        backgroundColor: '7289FF',
    },
    boxCancelar: {
        height: 40,
        borderWidth: 1,
        marginTop: 20,
        fontSize: 13,
        flexDirection: 'row',
        backgroundColor: '7289FF',
    },
    boxVisualizar: {
        height: 40,
        borderWidth: 1,
        marginTop: 20,
        fontSize: 13,
        flexDirection: 'row',
        backgroundColor: '7289FF',
    },
    buttonContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 55,
        marginTop: 30,
    },
    buttonText: {
        height: Dimensions.get('window').height/18,
        width: '100%',
        color: 'red',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingRight: 100,
    },
    buttonTextCancel: {
        height: Dimensions.get('window').height/18,
        width: '100%',
        color: 'red',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingRight: 250,
    },
})