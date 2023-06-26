import React from 'react';
import { View, Text } from 'react-native';
import MenuBtn from '../common/menu_btn/MenuBtn'

import styles from './bottomBack.style';

import back_icon from '../../asset/icons/back.png'

const BottomMenu = ({ menuOnPress }) => {
  return (
    <View style={styles.bottomMenu}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <MenuBtn iconUrl={back_icon} dimension='90%' handlePress={menuOnPress} />
      </View>
    </View>
  );
};

export default BottomMenu;