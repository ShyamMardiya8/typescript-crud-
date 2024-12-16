"use client"
import React, {useState} from 'react'
import Todo from '../Todo/page'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, deleteTodo, updateTodo, completeTodo, completeDelete } from '../Slice/page'
import Data from './Data/page'
function page() {

  const [todo, setTodo] = useState<string>("") 
  const [edit, setEdit] = useState<string>("")
  const [editId, setEditId] = useState<number | null>(null)
  const dispacth = useDispatch()

  
  const handleSend = () => {
    if (editId === null && todo) {
      dispacth(addTodo({id : Date.now(), todo}))
      setTodo("")
  }
  else if(editId !== null && edit){
    dispacth(updateTodo({id : editId, updates : edit}))
    setEditId(null)
    setEdit("")
  }
}
  const handleChange = (e :any) => {
    if (editId === null) {
      setTodo(e.target.value as string)
    }
    else{
      setEdit(e.target.value as string)
    }
  }
  const data = useSelector((state : any) => state.todo.init)
  const complete = useSelector((state : any) => state.todo.complete)
  console.log("data", data)
  const handleDelete = (id : number) => {
    dispacth(deleteTodo({id}))
  }
  const handleEdit = (id : number, currentTodo : string) => {
    setEditId(id)
    setEdit(currentTodo)
  }
 
  const handleComplete = (id : number ) => {
    dispacth(completeTodo({id}))
  }

  const handlecDelete = (id : number) => {
    dispacth(completeDelete({id}))
  }
  return (
    <>
  <Todo
        ent = {edit}
        todo={editId === null ? todo : edit}
        setTodo={editId === null ? setTodo : setEdit}
        handleSend={handleSend}
        handleChange={handleChange}
      />
  <Data data={data} handleDelete={handleDelete} handleEdit={handleEdit} handleComplete={handleComplete} complete={complete} handlecDelete={handlecDelete}/>
  </>
  )
}

export default page