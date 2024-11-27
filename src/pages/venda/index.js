import { Text, View, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import React, { useState } from "react";
import { ActivityIndicator } from 'react-native';


import { useNavigation } from '@react-navigation/native';


export default function Venda() {

    const navigation = useNavigation();
    
    const [nomeproduto, setNomeproduto] = useState ('');
    const [categoria, setCategoria] = useState ('');
    const [subcateg, setSubcateg] = useState ('');
    const [preco, setPreco] = useState ('');
    const [descricao, setDescricao] = useState ('');
    const [loading, setLoading] = useState (false);


    async function getLogin () {
        try {
            setLoading(true)

            if (!nomeproduto || !categoria || !subcateg || !preco || !descricao) {
                setLoading(false)
                return Alert.alert('Atenção', 'Todos os campos devem ser preenchidos.')
            }

            navigation.navigate("Fornecedor");

        }  
        catch (error) {
            console.log(error);
            setLoading(false)
        }finally{
            setLoading(false)
        }
    }


    return(
        <View style = {style.container}>
            <View style = {style.nome}>
                <Text style = {style.nomeEstilo}>Efetuar venda</Text>
            </View>
            <View style = {style.boxProduto}>
                <TextInput style = {style.textInput} placeholder="Nome do produto"
                    value={nomeproduto}
                    onChangeText={setNomeproduto}
                />
            </View>

        <View style = {style.boxCategoria}>
            <TextInput style = {style.textInput} placeholder="Categoria"
                value = {categoria}
                onChangeText={setCategoria}
            />
        </View>
        <View style = {style.boxSubCateg}>
            <TextInput style = {style.textInput} placeholder="Sub-Categoria" 
                value = {subcateg}
                onChangeText={setSubcateg}
            />
        </View>
        <View style = {style.boxPreco}>
            <TextInput style = {style.textInput} placeholder="Preço" 
                value={preco}
                onChangeText={setPreco}
            />    
        </View>
        <View style ={style.boxDescricao}>
            <TextInput style = {style.textInputDescricao} placeholder="Descrição" 
                value={descricao}
                onChangeText={setDescricao}
            />    
        </View>
        <View style = {style.button}>
            <TouchableOpacity onPress={() => getLogin()}>
                {
                    loading?
                        <ActivityIndicator />
                    :
                        <Text style = {style.buttonText}>Comprar</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                <Text style={style.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </View>
        <View style = {style.button}>
            <TouchableOpacity>
                <Text style = {style.buttonText}>  Visualizar lista de fornecedores  </Text>
            </TouchableOpacity>
        </View>
        </View>

    )
};