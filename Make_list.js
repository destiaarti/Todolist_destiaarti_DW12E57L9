import React, {Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';
class Make_list extends Component{
    render(){
      
        const cars=[  'work',
        'swim',
        'study',
        'sleep',
        'run']
    return(
        <View style={styles.container}>
           <View style={{alignItems:'center' }}>
               <Text style={styles.title} > Todo Apps</Text>
          </View>
                 <View style={styles.contentContainer}>
               {cars.map((item,index)=>{
                return (
                  
                    //untuk text diberi key dan index agar bisa tampil
                <Text style={styles.listContainer}key={index}>{item}</Text>
              
                )})}
                  </View>
               </View>  

        
    )
    }
}
export default Make_list;
export const styles =StyleSheet.create({
    container:{
        flex:1,
      
        backgroundColor: 'brown',
    },
  
    contentContainer:{
        flex:1,
        backgroundColor:'black',
        padding:18,
    },
    listContainer:{
        flexDirection:'column',
        justifyContent:'center',
        borderBottomWidth:0.5,
        backgroundColor:'white',
        borderColor:'black',
        paddingVertical:13,  
    },
    rowList:{
            flexDirection:'row',
            justifyContent:'space-between'
    }
    });
