import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import PaymentsScreen from './screens/PaymentsScreen';
import InmaTransferScreen from './screens/InmaTransferScreen';
import LocalTransferScreen from './screens/LocalTransferScreen';
import OwnTransferScreen from './screens/OwnTransferScreen';
import BottomTabBar from './components/organisms/BottomTabBar';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TransfersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="InmaTransfer"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="InmaTransfer" component={InmaTransferScreen} />
      <Stack.Screen name="LocalTransfer" component={LocalTransferScreen} />
    </Stack.Navigator>
  );
};

const InvestmentsScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F6F7F9',
    }}
  >
    <Text style={{ fontSize: 24, color: '#1D2433', fontWeight: '700' }}>
      Investments
    </Text>
    <Text style={{ fontSize: 16, color: '#71757F', marginTop: 8 }}>
      Coming soon
    </Text>
  </View>
);

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        tabBar={({ state, navigation }) => (
          <BottomTabBar
            activeTab={state.routeNames[state.index]}
            onTabPress={tabName => {
              navigation.navigate(tabName);
            }}
          />
        )}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="products" component={ProductsScreen} />
        <Tab.Screen name="transfers" component={TransfersStack} />
        <Tab.Screen name="payments" component={PaymentsScreen} />
        <Tab.Screen name="investments" component={InvestmentsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
