import Storage from './local_storage'

export const insert = async (task) => {
  try {
    await Storage.insert(task)
  } catch (error) {
    console.error(error)
    throw new Error('You can not save the new task')
  }
}

export const remove = async (id) => {
  try {
    await Storage.remove(id)
  } catch (error) {
    console.error(error)
    throw new Error('You can not remove task')
  }
}

export const update = async (task) => {
  try {
    await Storage.update(task)
  } catch (error) {
    throw new Error('You can not change the task')
  }
}

export const list = async () => {
  try {
    await Storage.list()
  } catch (error) {
    throw new Error('You can not get the list of tasks')
  }
}
