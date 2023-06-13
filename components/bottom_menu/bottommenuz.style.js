import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
    },
    bottomMenu: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 60,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default styles