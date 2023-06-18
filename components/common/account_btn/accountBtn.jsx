import { TouchableOpacity, Image } from 'react-native'

import styles from './accountBtn.style'

const AccountBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode='cover' style={styles.btnImg(dimension)} />
    </TouchableOpacity>
  )
}

export default AccountBtn;