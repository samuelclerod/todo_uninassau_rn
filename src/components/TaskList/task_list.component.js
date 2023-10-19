import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'

const whiteTextStyle = StyleSheet.create({
  text: {
    color: 'white',
  },
})

const TaskItem = ({ task }) => {
  return (
    <View>
      <Text style={whiteTextStyle.text}>{task.description}</Text>
    </View>
  )
}

export const TaskList = ({ tasks }) =>
  tasks.map((task) => <TaskItem key={task.id} task={task} />)
