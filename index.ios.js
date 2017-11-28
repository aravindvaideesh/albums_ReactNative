import React from 'react';
import { AppRegistry, View, Icon } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from './src/components/header';
import Login from './src/components/Login';
import Welcome from './src/components/Welcome';
import Profile from './src/components/Profile';
import AlbumList from './src/components/AlbumList';

//import BurgerMenu from './src/components/BurgerMenu';

const App = () => (
  	<View style={{ flex: 1}}>
  	<Header headerText={"Albums"} />
    <AlbumList />
    </View>
);

/*const App = StackNavigator({
  Home: { screen: Home },
  AlbumList: { screen: AlbumList },
  Welcome: { screen: Welcome },
  Profile: { screen: Profile }
});*/

AppRegistry.registerComponent('albums', () => App);