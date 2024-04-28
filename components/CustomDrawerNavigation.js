import { Drawer } from "react-native-paper"
import { View } from "react-native"


const CustomDrawerNavigation = ({navigation}) => {
  return (
    <View style={{paddingTop :30}}>
        <Drawer.Section>
        <Drawer.Item
            label="home"
            icon={"home"}
            onPress={() => navigation.navigate("home")}
        />

        <Drawer.Item
            label="detail"
            icon={"email"}
            onPress={() => navigation.navigate("detail")}
        />
    </Drawer.Section>
    </View>
    

    
  )
}

export default CustomDrawerNavigation