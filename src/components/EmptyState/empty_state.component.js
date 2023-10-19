import { Text, View } from 'react-native'
import { EmptyStateStyles as s } from './empty_state.style'

export const EmptyState = (props) => {
  return (
    <View style={s.container}>
      {/* <Image
        source={require('../../../assets/empty-state.png')}
        style={styles.image}
      /> */}
      <Text style={s.text}>There are no tasks</Text>
    </View>
  )
}
