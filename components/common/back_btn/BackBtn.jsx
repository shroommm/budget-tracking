import { TouchableOpacity, Image } from "react-native";

import styles from "./BackBtn.style";

const BackBtn = ({ iconUrl, dimension, handlePress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, style]}
      onPress={handlePress}
    >
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default BackBtn;
