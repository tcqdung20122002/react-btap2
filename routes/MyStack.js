import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import { Image } from "react-native";

const NewTitle = () => {
  return (
    <Image style={{height: 50, width: 50}} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
  );
}

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home Screen',
          headerTintColor: "blue",
          headerStyle: { backgroundColor: 'orange' },
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name="detail"
        component={DetailScreen}
        options={{
          headerTitle: () => <NewTitle />,
          headerTintColor: "blue",
          headerStyle: { backgroundColor: '#f64e32' },
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;