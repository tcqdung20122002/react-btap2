import 'react-native-gesture-handler'
import { createStackNavigator } from "@react-navigation/stack"
import {NavigationContainer} from '@react-navigation/native'
import DetailScreen from './screens/DetailScreen';
import { PaperProvider } from 'react-native-paper';

import MyDrawer from './routes/MyDrawer';
import MyStack from './routes/MyStack';
import MyBottomTabs from './routes/MyBottomTabs';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <PaperProvider>
         <NavigationContainer>
         <MyBottomTabs/>
      </NavigationContainer>
    </PaperProvider>
   
  );
}


