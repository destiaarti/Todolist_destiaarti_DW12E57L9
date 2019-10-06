/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button,Text,View,TouchableOpacity} from 'react-native';

import Hello from './Hello';

class Fundamental extends Component{
 
  //setState bisa dipakai jika extends ke componen
 
render(){
  const hello="Hello dumbways";
  return(
<View>
<TouchableOpacity onPress={this.handlepress}>

  <Hello name="k"/>


</TouchableOpacity>


</View>
  )
}
}
export default Fundamental;