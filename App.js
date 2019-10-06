
import React, { Component } from 'react';
import {
  TextInput,
  Text,
  View,
  Button,
  ListView,
  StyleSheet
} from 'react-native';

import Todo from './Todo'


class App extends Component {
  
  constructor() {
    super()

    this.state = {
      todos: []
    }

    this.todoInput = ""
  }

  addTodo() {
    let todoValue = this.todoInput.value
    
    let newTodos = this.state.todos
    newTodos.push(todoValue)

    this.setState({
      todos: newTodos
    })

    // Reset value
    this.todoInput.value = ""

    // Set focus to input
    this.todoInput.focus()

  }

  removeTodo(id) {
    let todos = this.state.todos.filter((todo,index) => {
      return id !== index
    })

    this.setState({
      todos: todos
    })
  }

  render() {
    const cars=[
      'work',
      'swim',
      'study',
      'sleep',
      'run'
    ]
    return (
      <View style={{flex:1}}>
      <View style={{flex:1,alignItems:'center'}}>
            <Text>Todo</Text>
          </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text>Todo's count: {this.state.todos.length}</Text>
          <Text>
          { this.state.todos.map((todo,index) => {
            return (<Todo id={index} key={index} todo={todo} onRemove={() => this.removeTodo(index)}/>)
          }) }
          
          </Text>
          <View style={styles.container}>
          <Text style={styles.text}>
      
       
           {cars.map((item,index)=>{
                return (
                    //untuk text diberi key dan index agar bisa tampil
                <Text key={index}>{item}</Text>
                )})}
     
      
             
          </Text>
          </View>
      </View>
      <View style={{ height : 50, flexDirection:"row",borderWidth:2,alignItems:'center'}}>
          <View style={{flex:2}}>

              <TextInput
                  value={this.state.textInput}
       
               />
          </View>
         
      </View>
</View>
)
}
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
},
  rowItem: {
    backgroundColor:'#f3f3f3',
    padding: 10
  },

  inputContainer: {
    padding: 5,
    marginTop: 10,
    flexDirection:'row'
  },

  inputText: {
    marginRight: 4,
    borderRadius:4,
    borderColor: '#2DB6A3',
    flex: 4,
    fontSize: 18,
    
  },

  inputButton: {
    backgroundColor: '#22C7A9',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    borderRadius: 4, 
    height: 45
  },

  buttonText: {
    fontSize: 20,
    color: '#ffffff'
  },

  listView: {
    margin: 4
  },

  itemRow: {
    marginBottom: 2,
    padding: 8,
    backgroundColor: '#FEF3CC'
  },

  itemText: {
    flex: 6,
    fontSize: 20,
    padding: 4
  },

  itemDelete: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    borderRadius: 50,
    padding: 3,
    flex: 1
  }
});

