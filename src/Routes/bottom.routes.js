import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import fornecedor from '../pages/fornecedor';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen
            name="Home"
            component={fornecedor}
        />
        <Tab.Screen
            name="Settings"
            component={SettingsScreen}
        />
    </Tab.Navigator>
  );
}