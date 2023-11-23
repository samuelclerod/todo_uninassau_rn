import { Image, Text, View } from 'react-native'
import { EmptyStateStyles as s } from './empty_state.style'

export const EmptyState = (props) => {
  const imageLocation = '../../../assets/icons/clipboard.png'

  return (
    <View style={s.container}>
      <Image source={require(imageLocation)} />
      <Text style={s.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={s.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}
