import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';

interface IUser {
  acc: string;
  psw: string;
}

export default function App() {
  const userArr: IUser[] = [
    {
      acc: 'curry0622',
      psw: '24213123'
    },
    {
      acc: 'naiyun0203',
      psw: '2134'
    },
    {
      acc: 'jacky0522',
      psw: '214567'
    },
  ];

  const renderUser:ListRenderItem<IUser> = ({ item }) => (
    <View>
      <Text>{item.acc}</Text>
      <Text>{item.psw}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={userArr}
        renderItem={renderUser}
      />
    </View>
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
