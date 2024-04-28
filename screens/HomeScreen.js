import { View, Text } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import { Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title='update count' onPress={() => setCount(count + 1)}>Update Count</Button>
      )
    });
  }, [count, navigation]);

  return (
    <View>
      <Text>{count}</Text>
      <Button
        color="grey"
        title="Click"
        onPress={() => navigation.navigate("detail", { name: "Teo" })}
      >
        Click
      </Button>
    </View>
  );
}

export default HomeScreen;