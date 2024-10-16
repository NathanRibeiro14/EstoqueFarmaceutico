import react from "react";

import {
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    Button,
} from 'react-native';
import { style } from "./styles";

export default function Inicio() {
    return (
        <View style = {style.container}>
            <View style = {style.nome}>
                <Text style = {style.nomeEstilo}>Registro de produtos</Text>
            </View>
            <View style = {style.boxProduto}>
                <TextInput style = {style.textInput} placeholder="Produto" />
            </View>
            <View style = {style.boxCategoria}>
                <TextInput style = {style.textInput} placeholder="Categoria" />
            </View>
            <View style = {style.boxSubCateg}>
                <TextInput style = {style.textInput} placeholder="Sub-Categoria" />
            </View>
            <View style = {style.boxPreco}>
                <TextInput style = {style.textInput} placeholder="Preço" />    
            </View>
            <View style ={style.boxDescricao}>
                <TextInput style = {style.textInputDescricao} placeholder="Descrição" />    
            </View>
            {/* <View style = {style.boxRegistrar}>
                <Button title = 'Registrar' onPress = {() => alert('Registrado com sucesso')} />
            </View>
            <View style = {style.boxCancelar}>
                <Button title = 'Cancelar' onPress = {() => alert('Operação cancelada')} />
            </View>
            <View style = {style.boxVisualizar}>
                <Button 
                    title = 'Visualizar lista de produtos' onPress = {() => alert('**LISTA**')}
                />
            </View> */}

            {/* botão */}

            <View>
                <TouchableOpacity style = {style.buttonText}>
                    <Text>Registrar</Text>
            
                    <Text>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
