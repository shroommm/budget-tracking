import React from 'react';
import { View, Text } from 'react-native';
import MenuBtn from '../common/menu_btn/MenuBtn'

import styles from './bottommenuz.style';

import menu_icon from '../../asset/icons/menu.png'
import add_icon from '../../asset/icons/plus.png' //author: Pixel Perfect (flaticon)

const BottomMenu = ({ menuOnPress, addItemOnPress }) => {
  return (
    <View style={styles.bottomMenu}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <MenuBtn iconUrl={menu_icon} dimension='90%' handlePress={menuOnPress} />
      </View>
      <View style={{flex: 1, alignItems: 'center', paddingBottom: 0}}>
        <MenuBtn iconUrl={add_icon} dimension='90%' handlePress={addItemOnPress} />
      </View>
    </View>
  );
};

export default BottomMenu;