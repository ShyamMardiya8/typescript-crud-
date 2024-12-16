import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Todo {
  id: number,
  todo: string
}

interface CompleteTodo {
  id: number,
  todo: string
}

interface TodoState {
  init: Todo[],
  complete: CompleteTodo[]
}
 
const init = (): Todo[] => {
  if (typeof window !== 'undefined') {
    const savedTodo = localStorage.getItem('todo')
    return savedTodo ? JSON.parse(savedTodo) : []
  }
  return []
}

const complete = (): CompleteTodo[] => {
  if (typeof window !== 'undefined') {
    const savedTodo = localStorage.getItem('complete')
    return savedTodo ? JSON.parse(savedTodo) : []
  }
  return []
}

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    init: init(),
    complete: complete()
  } as TodoState, 
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.init.push(action.payload)
      if (typeof window !== 'undefined') { 
        localStorage.setItem('todo', JSON.stringify(state.init))
      }
    },
    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      const filter = state.init.filter((i) => i.id !== action.payload.id)
      state.init = filter
      if (typeof window !== 'undefined') { 
        localStorage.setItem('todo', JSON.stringify(state.init))
      }
    },
    updateTodo: (state, action: PayloadAction<{ id: number, updates: string }>) => {
      const { id, updates } = action.payload
      const find = state.init.find((i) => i.id === id)
      if (find) {
        find.todo = updates
      }
      if (typeof window !== 'undefined') { 
        localStorage.setItem('todo', JSON.stringify(state.init))
      }
    },
    completeTodo: (state, action: PayloadAction<{ id: number }>) => {
      const find = state.init.find((i) => i.id === action.payload.id)
      if (find) {
        state.complete.push(find) 
        localStorage.setItem("complete", JSON.stringify(state.complete))
        state.init = state.init.filter((i) => i.id !== action.payload.id)
        localStorage.setItem('todo', JSON.stringify(state.init))
      }
    },
    completeDelete : (state, action : PayloadAction<{id : number}>) => {
      state.complete = state.complete.filter((i) => i.id !== action.payload.id)
      if (typeof window !== 'undefined') {
        localStorage.setItem("complete", JSON.stringify(state.complete))
      }
    }
  }
})

export const { addTodo, deleteTodo, updateTodo, completeTodo, completeDelete } = todoSlice.actions
export default todoSlice.reducer
