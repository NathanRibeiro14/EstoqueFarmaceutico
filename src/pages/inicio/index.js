import react, { useState } from "react";

import {
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { style } from "./styles";

export default function Inicio() {

    const [produto, setProduto] = useState ('');
    const [categoria, setCategoria] = useState ('');
    const [subcateg, setSubcateg] = useState ('');
    const [preco, setPreco] = useState ('');
    const [descricao, setDescricao] = useState ('');
    const [loading, setLoading] = useState (false);

    async function getLogin () {
        try {
            setLoading(true)

            if (!produto || !categoria || !subcateg || !preco || !descricao) {
                setLoading(false)
                return Alert.alert('Atenção', 'Todos os campos devem ser preenchidos.')
            }

            setTimeout(() => {
                Alert.alert('Produto cadastrado.')
                setLoading(false)
            },2000)
        }  
        catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    return (
        <View style = {style.container}>
            <View style = {style.nome}>
                <Text style = {style.nomeEstilo}>Registro de produtos</Text>
            </View>
            <View style = {style.boxProduto}>
                <TextInput style = {style.textInput} placeholder="Produto"
                    value = {produto}
                    onChangeText={setProduto}
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
                            <Text style = {style.buttonText}>Registrar</Text>
                    }
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style = {style.buttonText}>Cancelar</Text>
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
