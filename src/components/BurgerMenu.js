import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const BurgerMenu = (props) => {
	_handleDrawer = () => {
        props.nav.navigate('Home');
    }
        return (
            <TouchableOpacity
                onPress = {this._handleDrawer} >
                <Image source={{uri: 'https://image.flaticon.com/icons/png/128/52/52045.png'}} />
            </TouchableOpacity>
        );
};


export default BurgerMenu