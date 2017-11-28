import React, { Component } from 'react'
import { View, Text, Image, Platform, Button } from 'react-native'
import { NavigationActions } from 'react-navigation';
//import BurgerMenu from './BurgerMenu';

class Profile extends Component {

  static navigationOptions = function(props) {
  return {
    headerLeft: <Button onPress={() => props.navigation.navigate('Home')} title= "<" />
  }
};
  // Nav options can be defined as a function of the screen's props:
  render() {
   
   //this.props.navigation.goBack('Home');
   //console.log('Navigation ' + JSON.stringify(this.props, null, 3));
    // The screen's current route is passed in to `props.navigation.state`:
    //const { params } = this.props.navigation.state;
    return (
      <View>
        <Image
      source = {{ uri: 'https://premierleague-static-files.s3.amazonaws.com/premierleague/photo/2017/05/21/607fa847-dc1b-4d80-8847-003aa228eade/2017-05-21T162036Z_138385236_MT1ACI14796599_RTRMADP_3_SOCCER-ENGLAND-CHE-SUN.JPG' }}
      style = {{ width: 300, height: 300 }}
      />
      <Text style={{'fontWeight': 'bold'}}>Current Platform {Platform.OS}</Text>
      </View>
    );
  }
}

export default Profile;