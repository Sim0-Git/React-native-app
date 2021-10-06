import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants' //used instead of SafeArea

const Item = (props) =>{
 return(
   <View>
     <Text>{props.text}</Text>
   </View>
 )
}

export default function App() {

  //Flatlist
  const AppData = [
    //JSON objects with 2 keys (id and name)
    {id: "1", name: "Tacos"},
    {id: "2", name: "Tortillas"},
    {id: "3", name: "Burrito"},
    {id: "4", name: "Paella"}
  ]

  const Renderer = ({item}) => (<Item text={item.name}/>)

  return (
    <View style={styles.container}>
      <Text>My app</Text>
      <FlatList data={AppData} keyExtractor={(Item) => Item.id} renderItem={Renderer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
    
  },
});
