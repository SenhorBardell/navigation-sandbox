import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Screen1 = ({navigation}) => <View>
  <Text>Screen1</Text>
  <Button 
    title='Reset' 
    onPress={() => navigation.dispatch(CommonActions.reset({
      routes: [{name: 'Profile', params: {screen: 'Screen6'}}]
    }))}/>
    </View>
const Screen2 = () => <View><Text>Screen2</Text></View>
const Screen3 = () => <View><Text>Screen3</Text></View>
const Screen4 = () => <View><Text>Screen4</Text></View>
const Screen5 = ({navigation}) => <View>
  <Text>Screen5</Text>
  <Button title='Navigate to screen 6' onPress={() => navigation.navigate('Screen6')} />
  </View>
const Screen6 = () => <View><Text>Screen6</Text></View>
const Screen7 = () => <View><Text>Screen7</Text></View>
const Screen8 = () => <View><Text>Screen8</Text></View>

const Stack1 = createNativeStackNavigator()
const Stack2 = createNativeStackNavigator()
const Stack3 = createNativeStackNavigator()
const Stack4 = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

const Home = () => <Stack1.Navigator>
  <Stack1.Screen name="Screen1" component={Screen1} />
  <Stack1.Screen name="Screen2" component={Screen2} />
</Stack1.Navigator>

const Discover = () => <Stack2.Navigator>
  <Stack2.Screen name="Screen3" component={Screen3} />
  <Stack2.Screen name="Screen4" component={Screen4} />
</Stack2.Navigator>

const Profile = () => <Stack3.Navigator>
  <Stack3.Screen name="Screen5" component={Screen5} />
  <Stack3.Screen name="Screen6" component={Screen6} />
</Stack3.Navigator>

const Settings = () => <Stack4.Navigator>
  <Stack4.Screen name="Screen7" component={Screen7} />
  <Stack4.Screen name="Screen8" component={Screen8} />
</Stack4.Navigator>

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Discover" component={Discover} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
