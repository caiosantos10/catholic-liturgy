import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
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
  );
}
