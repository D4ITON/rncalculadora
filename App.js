/**
 * I Examen Parcial
 * Curso: Programación de dispositivos móviles Android
 *
 * @author D4ITON
 */

import React, {Component} from 'react';
import {
  StyleSheet, 
  Text,
  Alert,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

  constructor(){
    super()
    this.state = {
      resultText: '',
      value1: '',
      value2: ''
    }
    this.operations = ['+', '-', '*', '/']
    this.operationsDisplay=['suma', 'resta', 'producto', 'division']
  }

  // funciones
  operate(operation){
    let x = parseInt(this.state.value1);
    let y = parseInt(this.state.value2);

    console.log(typeof(x));

    if (isNaN(x) || isNaN(y)) {
      Alert.alert(
        'Advertencia',
        'Se encontraron valores vacíos',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }

    switch(operation){
      case '+':
        this.setState({
          resultText: x+y
        })
        break 
      case '-':
        this.setState({
          resultText: x-y
        })
        break 
      case '*':
        this.setState({
          resultText: x*y
        })
        break 
      case '/':
        if (y != 0) {
          this.setState({
            resultText: x/y
          })  
        }else{
          this.setState({
            resultText: 'no válido'
          })
        }
        break 
    }
  };


  render() {
    let botones = []
    for (let i = 0; i<=3; i++){
      botones.push(
        <TouchableOpacity key={this.operations[i]} style={styles.button} onPress={() => this.operate(this.operations[i])}>
          <Text>{this.operationsDisplay[i]}</Text>
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
        <Text>I EXAMEN PARCIAL - ANDROID</Text>
        <TextInput
          style={styles.inputText}
          onChangeText={(value1) => this.setState({value1})}
          value={this.state.value1}
          keyboardType={'numeric'}
        />  
        <TextInput
          style={styles.inputText}
          onChangeText={(value2) => this.setState({value2})}
          value={this.state.value2}
          keyboardType={'numeric'}
        />
        <Text>OPERACIONES</Text>
        {/* sumar */}
        {botones}
        {/*resultado*/}
        <Text>RESULTADO</Text>
        <Text style={styles.inputText}>
          {this.state.resultText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputText:{
    height: 40, 
    width: 300,
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 12,
    paddingLeft: 10
 },
 button:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300
 },
 buttonNavigation:{
    width: 300,
    height: 40,
    backgroundColor: '#3498db',
    borderRadius: 5,
    justifyContent: 'center'
 },
 buttonNavigationText:{
  color: 'white',
  fontSize: 16,
  textAlign: 'center'
 }
});
