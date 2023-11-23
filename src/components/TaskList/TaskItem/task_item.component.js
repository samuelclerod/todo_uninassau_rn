import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './task_item.style'

export const TaskItem = ({ task, onCheck, onDelete }) => {
  const { completed, description, id } = task

  const radioImage = completed
    ? require('../../../../assets/icons/checked.png')
    : require('../../../../assets/icons/unchecked.png')

  const trashImage = require('../../../../assets/icons/trash.png')

  const handleCheck = () => {
    onCheck(id)
  }

  const handleRemove = () => {
    onDelete(id)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCheck}>
        <Image source={radioImage} />
      </TouchableOpacity>

      <Text style={styles.text}>{description}</Text>

      <TouchableOpacity onPress={handleRemove}>
        <Image source={trashImage} />
      </TouchableOpacity>
    </View>
  )
}
