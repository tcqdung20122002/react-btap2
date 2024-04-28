import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const DetailScreen = ({navigation, route}) => {
  return (
    <View>
      <Text>DetailScreen {route.params.name}</Text>
      <Button
      color={"#f64e32"}
      title='back'
        onPress={()=>navigation.goBack()}
      >Back</Button>
    </View>
  )
}

export default DetailScreen