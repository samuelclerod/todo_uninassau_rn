import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

export const EmptyStateStyles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[400],
    width: '100%',
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: 20,
  },
  title: {
    color: colors.gray[300],
    fontWeight: 'bold',
    marginTop: 16,
  },
  subtitle: {
    color: colors.gray[300],
  },
})
