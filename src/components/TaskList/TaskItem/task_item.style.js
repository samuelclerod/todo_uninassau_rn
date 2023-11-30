import { StyleSheet } from 'react-native'
import colors from '../../../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    gap: 8,
    height: 64,
    backgroundColor: colors.gray[500],
  },
  text: {
    flex: 1,
    color: colors.gray[100],
    fontSize: 14,
  },
  checkedText: {
    flex: 1,
    color: colors.gray[300],
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
})
