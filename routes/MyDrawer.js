
import HomeScreen from "../screens/HomeScreen"
import DetailScreen from "../screens/DetailScreen"
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerNavigation from "../components/CustomDrawerNavigation";

const Drawer = createDrawerNavigator();

const MyDrawer = () =>{
    return (
        <Drawer.Navigator
            initialRouteName="home"
            screenOptions={{
               
            }}
           drawerContent={props => <CustomDrawerNavigation {...props}/>}
        >
             <Drawer.Screen name="home" component={HomeScreen} />
            <Drawer.Screen name="detail" component={DetailScreen} />
        </Drawer.Navigator>
    )
}
export default MyDrawer