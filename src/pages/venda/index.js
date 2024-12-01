import { Text, View, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import React, { useState } from "react";
import { ActivityIndicator } from 'react-native';
import { CheckBox } from 'react-native-elements';


import { useNavigation } from '@react-navigation/native';


export default function Venda() {

    const navigation = useNavigation();
    
    const [nomeproduto, setNomeproduto] = useState ('');
    const [quantidade, setQuantidade] = useState ('');
    const [nomecli, setNomecli] = useState ('');
    const [datavenda, setDatavenda] = useState ('');
    const [loading, setLoading] = useState (false);
    const [status, setStatus] = useState('Concluida');


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
            <TextInput style = {style.textInput} placeholder="Quantidade"
                value = {quantidade}
                onChangeText={setQuantidade}
            />
        </View>
        <View style = {style.boxSubCateg}>
            <TextInput style = {style.textInput} placeholder="Nome do Cliente" 
                value = {nomecli}
                onChangeText={setNomecli}
            />
        </View>
        <View style = {style.boxPreco}>
            <TextInput style = {style.textInput} placeholder="Data da Venda" 
                value={datavenda}
                onChangeText={setDatavenda}
            />    
        </View>

        <View style={{ padding: 20, borderWidth: 1, borderColor: '#ddd', borderRadius: 5 }}>
            <Text>Status</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <TouchableOpacity 
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setStatus('Concluida')}
                >
                    <CheckBox 
                        checked={status === 'Concluida'}
                        onPress={() => setStatus('Concluida')}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        containerStyle={{ padding: 0, margin: 0 }}
                    />
                    <Text>Concluída</Text>
                </TouchableOpacity>

        
                <TouchableOpacity 
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setStatus('Pendente')}
                >
                    <CheckBox 
                        checked={status === 'Pendente'}
                        onPress={() => setStatus('Pendente')}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        containerStyle={{ padding: 0, margin: 0 }}
                    />
                <Text>Pendente</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setStatus('Cancelada')}
                >
                   <CheckBox 
                        checked={status === 'Cancelada'}
                        onPress={() => setStatus('Cancelada')}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        containerStyle={{ padding: 0, margin: 0 }}
                    />
                    <Text>Cancelada</Text>
                </TouchableOpacity>
            </View>
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