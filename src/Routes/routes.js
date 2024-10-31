import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from '../pages/inicio';
import Relatorio from '../pages/Relatorio';
import Cadastro from '../pages/Cadastro';
import fornecedor from '../pages/fornecedor';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator()

function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Fornecedor"
                component={Fornecedor}
            />
        </Stack.Navigator>
    );
}


const Tab = createBottomTabNavigator();

function Routes () {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#171626',
                    
                }
            }}
        
        >
            <Tab.Screen
                name = "Inicio"
                component = {Inicio}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size, focused}) => {
                        if (focused) {
                            return <Ionicons name = "home" size = {size} color = {color} />
                        }

                        return <Ionicons name = "home-outline" size = {size} color = {color} />
                    }
                }}
            />

            <Tab.Screen
                name = "Cadastro"
                component = {Cadastro}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color, focused}) => {
                        if (focused) {
                            return <FontAwesome name="pencil" size={24} color={color} />
                        }

                        return <FontAwesome name="pencil" size={24} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name = "Relatorio"
                component = {Relatorio}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size, focused}) => {
                        if (focused) {
                            return <FontAwesome5 name="file-circle-plus" size={24} color={color} />
                        }

                        return <FontAwesome5 name="file-circle-plus" size={24} color={color} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}



export default  Routes;