import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { styles } from './home.styles'
import { Header } from '../../components/Header/header.component'
import { Form } from '../../components/Form/form.component'
import { EmptyState } from '../../components/EmptyState/empty_state.component'
import { TaskList } from '../../components/TaskList/task_list.component'

export const Home = (props) => {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    const newTasks = [...tasks, task]
    setTasks(newTasks)
  }

  return (
    <View style={styles.container}>
      <Header />
      <Form onAddTask={addTask} />
      {tasks.length ? <TaskList tasks={tasks} /> : <EmptyState />}
    </View>
  )
}
