import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableHighlight } from 'react-native';
import logo from './src/assets/logo.png';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 40,
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  heading: {
    marginTop: 10,
    fontSize: 30
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec',
    alignSelf: 'stretch',
    margin: 10
  },
  button: {
    height: 50,
    backgroundColor: '#48bbec',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  }
});

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo}/>
        <Text style={styles.heading}>Github browser </Text>
        <TextInput style={styles.input} placeholder="Github username"/>
        <TextInput style={styles.input} placeholder="Github password"/>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Login;
