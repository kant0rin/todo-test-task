import {createSlice} from "@reduxjs/toolkit";

export interface IToDo {
  text: string
  isDone: boolean,
  id: string
}

export interface IState {
  toDoList: IToDo[]
}

const getInitialTodos = () => {
  const localTodoList = window.localStorage.getItem('toDoList')
  if (localTodoList) {
    return JSON.parse(localTodoList)
  }
  window.localStorage.setItem('toDoList', JSON.stringify([]))
  return []
}

const initialState: IState = {
  toDoList: getInitialTodos()
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      state.toDoList.push(action.payload)
      const localToDoList = window.localStorage.getItem('toDoList')
      if (localToDoList) {
        const toDoListArr: IToDo[] = JSON.parse(localToDoList)
        toDoListArr.push(action.payload)
        window.localStorage.setItem('toDoList', JSON.stringify(toDoListArr))
      } else {
        window.localStorage.setItem('toDoList', JSON.stringify([{...action.payload}]))
      }
    },
    removeAllSelectedTodos(state) {
      const localToDoList = window.localStorage.getItem('toDoList')
      if (localToDoList) {
        const toDoListArr: IToDo[] = JSON.parse(localToDoList)
        window.localStorage.setItem('toDoList', JSON.stringify(toDoListArr.filter((e: IToDo) => e.isDone === false)))
        state.toDoList = toDoListArr.filter((e: IToDo) => e.isDone === false)
      }
    },
    updateToDo(state, action){
      const localToDoList = window.localStorage.getItem('toDoList')
      if (localToDoList) {
        const toDoListArr: IToDo[] = JSON.parse(localToDoList)
        toDoListArr.forEach(todo => {
          if (todo.id === action.payload.id) {
            todo.isDone = action.payload.isDone
          }
        })
        window.localStorage.setItem('toDoList', JSON.stringify(toDoListArr))
        state.toDoList = toDoListArr
      }
    }
  }
})

export default todoSlice.reducer
export const {addTodo, removeAllSelectedTodos, updateToDo} = todoSlice.actions
