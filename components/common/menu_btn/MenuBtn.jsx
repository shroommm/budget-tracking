import { TouchableOpacity, Image } from 'react-native'

import styles from './menuBtn.style'

const MenuBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode='cover' style={styles.btnImg(dimension)} />
    </TouchableOpacity>
  )
}

export default MenuBtn;