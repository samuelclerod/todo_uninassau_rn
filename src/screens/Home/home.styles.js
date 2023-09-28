import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[700],
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.purple,
    fontSize: 24,
    fontWeight: 'bold',
  },
})
