import { Image, View } from 'react-native'
import { styles } from './header.style'

export const Header = (props) => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../../assets/header.png')}
        style={styles.logo}
      />
    </View>
  )
}
