import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/tabs/HomeScreen';
import ExploreScreen from './src/screens/tabs/ExploreScreen';
import ProfileScreen from './src/screens/tabs/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
        <Tab.Screen name='Explore' component={ExploreScreen}></Tab.Screen>
        <Tab.Screen name='Profile' component={ProfileScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
