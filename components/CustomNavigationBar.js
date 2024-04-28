import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Menu } from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements'

const CustomNavigationBar = ({
    navigation,route,options,back,
}) => {

    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const title = getHeaderTitle(options, route.name);
  return (
    <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack}/>:null}
        <Appbar.Content title={title}/>
        {!back ? (
            <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
                <Appbar.Action
                icon="dots-vertical"
                onPress={openMenu}
            />
            }>
                <Menu.Item
                    onPress={() =>{
                        console.log('đã nhấn 1')

                    }}
                    title="Home"/>
                <Menu.Item
                    onPress={() =>{
                       navigation.navigate("detail")

                    }}
                    title="Detail"/>
                <Menu.Item
                    onPress={() =>{
                        console.log('đã nhấn 3')

                    }}
                    title="Option 3"
                    disabled/>

            </Menu>
        ) : null

        }
    </Appbar.Header>
  )
}

export default CustomNavigationBar