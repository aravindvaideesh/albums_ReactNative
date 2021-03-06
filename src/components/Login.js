import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
//import { StackNavigator } from 'react-navigation';

class Login extends Component {

   state = {
      email: '',
      password: ''
   }

   handleEmail = (text) => {
      this.setState({ email: text })
   }

   handlePassword = (text) => {
      this.setState({ password: text })
   }

   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }

   render(){
   	const { navigate } = this.props.navigation;
      return (
         <View>
            <TextInput style = {styles.input}
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
					
            <TextInput style = {styles.input}
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
					
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = { () => navigate('AlbumList')}>
               <Text style = {styles.submitButtonText}>
                  Submit
               </Text>
            </TouchableOpacity>
         </View>
      )
   }
}

export default Login

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
	
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
	
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
	
   submitButtonText:{
      color: 'white'
   }
})