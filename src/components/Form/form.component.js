import { useState } from 'react'
import { TextInput, TouchableOpacity, View, Text } from 'react-native'

import { styles } from './form.styles'
import colors from '../../../constants/colors'

export const Form = ({ onAddTask }) => {
  const [text, setText] = useState('')

  const handleAddTask = () => {
    const typedText = text.trim()
    if (typedText.length === 0) return

    const task = {
      id: new Date().getTime(),
      description: typedText,
      completed: false,
    }

    onAddTask(task)

    setText('')
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        onChangeText={(typed) => setText(typed)}
        value={text}
        placeholder="Adicione uma tarefa"
        placeholderTextColor={colors.gray[300]}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
