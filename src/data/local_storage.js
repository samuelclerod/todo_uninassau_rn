import AsyncStorage from '@react-native-async-storage/async-storage'

const insert = async (task) => {
  const data = await getData()
  data.tasks.push(task)
  await storeData(data)
}

const remove = async (id) => {
  const data = await getData()
  data.tasks = data.tasks.filter((task) => task.id != id)
  await storeData(data)
}

const update = async (task) => {
  const data = await getData()
  data.tasks = data.tasks.map((t) => (t.id == task.id ? task : t))
  await storeData(data)
}

const list = async () => {
  const { tasks } = await getData()
  return tasks || []
}

const storeData = async (value) => {
  const jsonValue = JSON.stringify(value)
  await AsyncStorage.setItem('task-app', jsonValue)
}

const getData = async () => {
  const empty = { tasks: [] }
  const jsonValue = await AsyncStorage.getItem('task-app')
  const data = jsonValue ? JSON.parse(jsonValue) : empty
  return data
}

export default {
  insert,
  remove,
  update,
  list,
}
