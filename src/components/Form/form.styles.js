import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

export const styles = StyleSheet.create({
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -24,
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  input: {
    flex: 1,
    backgroundColor: colors.gray[500],
    borderRadius: 6,
    color: colors.white,
    padding: 16,
    fontSize: 16,
    marginRight: 4,
    borderColor: colors.purpleDark,
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
})
