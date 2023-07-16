import React from "react";
import { View } from "react-native";

import styles from "./bottomBack.style";

import back_icon from "../../asset/icons/backbtn.png";
import BackBtn from "../common/back_btn/BackBtn";

const BottomBack = ({ menuOnPress }) => {
  return (
    <View style={styles.bottomMenu}>
     
      <View style={{ flex: 1, alignItems: "center", paddingBottom: 0 }}>
        <BackBtn
          iconUrl={back_icon}
          dimension="90%"
          handlePress={menuOnPress}
        />
      </View>
    </View>
  );
};

export default BottomBack;
