import { Button, Dimensions, StyleSheet, TextInput } from "react-native";




export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: 2,
        
    },
    nome: {
        height: Dimensions.get('window').height/10,
    },
    nomeEstilo: {
        fontSize: 18,
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
        padding: 18,
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
        padding: 20
    },
    boxProduto: {
        width: '100%',
        paddingLeft: 55,
        paddingRight: 55,
    },
    boxCategoria: {
        width: '100%',
        paddingLeft: 55,
        paddingRight: 55,
    },
    boxSubCateg: {
        width: '100%',
        paddingLeft: 55,
        paddingRight: 55,
    },
    boxPreco: {
        width: '100%',
        paddingLeft: 55,
        paddingRight: 55,
    },
    boxDescricao: {
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
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 40,
        marginTop: 35,
        borderWidth: 1,
        gap: 15,
        padding: 9,
        borderRadius: 8,
        backgroundColor: '#7289FF',
        overflow: 'hidden',
    },
    button: {
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
})