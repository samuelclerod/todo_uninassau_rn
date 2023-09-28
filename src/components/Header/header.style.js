import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

export const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.gray[700],
    width: '100%',
    height: 173,
    justifyContent: 'center',
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
  },
})
