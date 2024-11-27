import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cadastro from "../pages/cadastro";
import Fornecedor from "../pages/fornecedor";
import Inicio from "../pages/inicio";
import Venda from "../pages/venda";

export default function RoutesStack() {
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator
            initialRouteName="Inicio"
        >

            <Stack.Screen 
                name="Cadastro"
                component={Cadastro}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Venda"
                component={Venda}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Fornecedor"
                component={Fornecedor}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}