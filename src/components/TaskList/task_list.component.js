import { TaskItem } from './TaskItem/task_item.component'
import { FlatList, View } from 'react-native'

export const TaskList = ({ tasks, onDelete, onCheck }) => {
  return (
    <View style={{ width: '100%', paddingHorizontal: 16 }}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem onCheck={onCheck} onDelete={onDelete} task={item} />
        )}
      />
    </View>
  )
}
// tasks.map((task) => <TaskItem key={task.id} task={task} />)
