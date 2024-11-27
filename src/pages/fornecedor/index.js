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

export default function Fornecedor() {

    const [empresa, setEmpresa] = useState ('');
    const [representante, setRepresentante] = useState ('');
    const [cnpj, setCnpj] = useState ('');
    const [cep, setCep] = useState ('');
    const [fone, setFone] = useState ('');
    const [loading, setLoading] = useState (false);

    async function getLogin () {
        try {
            setLoading(true)

            if (!produto || !categoria || !subcateg || !preco || !descricao) {
                setLoading(false)
                return Alert.alert('Atenção', 'Todos os campos devem ser preenchidos.')
            }

            navigation.navigate("BottomRoutes")

            setTimeout(() => {
                Alert.alert('Produto cadastrado.')
                setLoading(false)
            },2000)
        }  
        catch (error) {
            console.log(error);
            setLoading(false)
        }finally{
            setLoading(false)
        }
    }

    return (
        <View style = {style.container}>
            <View style = {style.nome}>
                <Text style = {style.nomeEstilo}>Registro de produtos</Text>
            </View>
            <View style = {style.boxProduto}>
                <TextInput style = {style.textInput} placeholder="Nome da Empresa"
                    value = {empresa}
                    onChangeText={setEmpresa}
                />
            </View>
            <View style = {style.boxCategoria}>
                <TextInput style = {style.textInput} placeholder="Nome do Representante"
                    value = {representante}
                    onChangeText={setRepresentante}
                />
            </View>
            <View style = {style.boxSubCateg}>
                <TextInput style = {style.textInput} placeholder="CNPJ" 
                    value = {cnpj}
                    onChangeText={setCnpj}
                />
            </View>
            <View style = {style.boxPreco}>
                <TextInput style = {style.textInput} placeholder="CEP" 
                    value={cep}
                    onChangeText={setCep}
                />    
            </View>
            <View style ={style.boxDescricao}>
                <TextInput style = {style.textInputDescricao} placeholder="Telefone" 
                    value={fone}
                    onChangeText={setFone}
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
