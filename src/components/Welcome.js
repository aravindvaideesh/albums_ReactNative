import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class Welcome extends Component {
  // Nav options can be defined as a function of the screen's props:
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Welcome {params.user}</Text>
        <TouchableOpacity
               style={styles.submitButton}
               onPress = { () => navigate('Profile')}>
               <Text style={styles.submitButtonText}>
                  Next
               </Text>
            </TouchableOpacity>
      </View>
    );
  }
}

export default Welcome

const styles = StyleSheet.create({
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