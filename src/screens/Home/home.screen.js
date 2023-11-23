import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'
import { styles } from './home.styles'
import { Header } from '../../components/Header/header.component'
import { Form } from '../../components/Form/form.component'
import { EmptyState } from '../../components/EmptyState/empty_state.component'
import { TaskList } from '../../components/TaskList/task_list.component'
import { list } from '../../data/task_repository'

export const Home = (props) => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    retrieveTasks()
  }, [])

  const retrieveTasks = async () => {
    try {
      //wait 1s to show the loading
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const data = await list()
      setTasks(data)
    } catch (error) {
      Alert.alert(
        'Error',
        'Não foi possível recuperar a lista local de tarefas.'
      )
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const addTask = (task) => {
    const found = tasks.find((t) => (t.description = task.description))
    if (found) {
      return Alert.alert(
        'Tarefa já cadastrada',
        'Você já cadastrou uma tarefa igual.'
      )
    }

    const newTasks = [...tasks, task]
    setTasks(newTasks)
  }

  const removeTask = (id) => {
    const task = tasks.find((t) => t.id == id)
    if (!task) return

    Alert.alert(
      'Remover tarefa',
      `Deseja remover a tarefa ${task.description}?`,
      [
        {
          text: 'sim',
          onPress: () => {
            const newTasks = [...tasks].filter((task) => task.id != id)
            setTasks(newTasks)
          },
        },
        { text: 'nao', style: 'cancel' },
      ]
    )
  }

  const handleCheck = (id) => {
    const newTasks = [...tasks]

    task = newTasks.find((t) => t.id == id)
    if (!task) {
      return
    }
    task.completed = !task.completed

    setTasks(newTasks)
  }

  if (loading)
    return (
      <View style={styles.container}>
        <Header />

        <Text>Carregando...</Text>
      </View>
    )

  return (
    <View style={styles.container}>
      <Header />

      <Form onAddTask={addTask} />

      {tasks?.length ? (
        <TaskList onDelete={removeTask} onCheck={handleCheck} tasks={tasks} />
      ) : (
        <EmptyState />
      )}
    </View>
  )
}
