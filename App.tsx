import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, ListRenderItem } from 'react-native';

interface IUser {
  acc: string;
  psw: string;
}

export default function App() {
  const [userArr, setUserArr] = useState<IUser[]>([
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
  ]);

  const renderUser:ListRenderItem<IUser> = ({ item }) => (
    <View style={styles.listItem}>
      <Text>{item.acc}</Text>
      <Text>{item.psw}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={userArr}
        renderItem={renderUser}
        style={styles.listContainer}
      />
      <TextInput />
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
  listContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee',
  },
  listItem: {
    flex: 1,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd'
  }
});
