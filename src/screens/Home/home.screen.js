import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'
import { styles } from './home.styles'
import { Header } from '../../components/Header/header.component'
import { Form } from '../../components/Form/form.component'
import { EmptyState } from '../../components/EmptyState/empty_state.component'
import { TaskList } from '../../components/TaskList/task_list.component'
import { list, insert, remove, update } from '../../data/task_repository'

export const Home = (props) => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    retrieveTasks()
  }, [])

  const retrieveTasks = async () => {
    try {
      const tasks = await list()
      if (tasks) {
        setTasks(tasks)
      }
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

  const addTask = async (task) => {
    console.log({ tasks })
    const found = tasks.find((t) => (t.description = task.description))
    if (found) {
      return Alert.alert(
        'Tarefa já cadastrada',
        'Você já cadastrou uma tarefa igual.'
      )
    }

    try {
      const newTasks = [...tasks, task]
      await insert(task)
      setTasks(newTasks)
    } catch (error) {
      return Alert.alert('Erro', 'Não foi possível registrar a tarefa.')
    }
  }

  const confirmRemove = async (id) => {
    try {
      const newTasks = [...tasks].filter((task) => task.id != id)
      await remove(id)
      setTasks(newTasks)
    } catch (error) {
      console.log({ error })
      return Alert.alert('Erro', 'Não foi possível remover a tarefa.')
    }
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
          onPress: () => confirmRemove(id),
        },
        { text: 'nao', style: 'cancel' },
      ]
    )
  }

  const handleCheck = async (id) => {
    const newTasks = [...tasks]

    task = newTasks.find((t) => t.id == id)
    if (!task) {
      return
    }
    task.completed = !task.completed

    try {
      await update(task)
      setTasks(newTasks)
    } catch (error) {
      return Alert.alert('Erro', 'Não foi possível atualizar a tarefa.')
    }
  }

  if (loading)
    return (
      <View style={styles.container}>
        <Header />

        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
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
