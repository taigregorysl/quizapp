import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function home({navigation}) {
    return (
      <View>
          <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://cdn.worldvectorlogo.com/logos/google-icon.svg',
        }}
      />
        <TouchableOpacity  style={styles.startGame}
        onPress={() => navigation.push('Quiz')}>
        <Text>Start Game</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.highScore}
        onPress={() => navigation.push('Quiz')}>
        <Text>High Score</Text>     
      </TouchableOpacity>
      </View>
    );
    }

  const styles = StyleSheet.create({

    highScore:{
        padding:20,
       backgroundColor:'blue',
       textAlign:'center',
       marginVertical:10,
    },

   startGame:{
       padding:20,
       backgroundColor:'red',
       textAlign:'center',
       marginVertical:10,
   },
   tinyLogo:{
       marginVertical:10,
       height:100,
       width:100,
      alignSelf:'center'
   }


      });