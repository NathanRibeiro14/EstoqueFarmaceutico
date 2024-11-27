import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Relatorio from '../pages/Relatorio';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator>
        <Tab.Screen
            name="Relatorio"
            component={Relatorio}
        />
        <Tab.Screen
            name="BottomRoutes"
            component={BottomRoutes}
        />
    </Tab.Navigator>
  );
}