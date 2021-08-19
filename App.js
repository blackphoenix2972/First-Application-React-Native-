import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.box_title}>
          <Text style={styles.header}>First Application using react native</Text>
        </View>
        <View style={styles.padding_between_boxes}></View>
        <View style={styles.box_subtitle}>
          <Text style={styles.subtitle}>This is my very first react native application that uses Views, Text, Image and other things.</Text>
        </View>
        
     </View>
     <View style={styles.padding_between_boxes}></View>
     <View style={styles.body}>
      
          <View style={styles.image_box}>
            <Image style={styles.image_dimension} source={require('./assets/phoenix.jpg')}/>
          </View>
         
          <View style={styles.paragraph_box}>
            <Text style={styles.paragraph}>Hello there! My name is Mo and I am very excited to make this. Of course the very first project will always look bad but I shall improve. One day I will be proud to call my self a Mobile React Native Developer!</Text>
          </View>
     </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  body: {
    
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  }
  
  ,
  stretch: {
    width: 500,
    height: 500,
    resizeMode: 'contain',
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
  },

  header: {
    fontSize: 22,
    fontWeight: 'bold',

  }
  ,
  box_title: {
    flex: 2,
    backgroundColor: 'orange',
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
  },
  
  box_subtitle: {
    flex: 5,
    textAlign: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',

  },
  padding_between_boxes: {
    padding: 10,
  },
  image_box: {
    
  },
  image_dimension: {
    width: 500,
    height: 500,
  },
  paragraph_box: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 10,

  },
  paragraph: {
    color: 'black',
    fontSize: 18,
    padding: 20,
  }
});
