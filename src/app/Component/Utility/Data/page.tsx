"use client"
import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { RxUpdate } from "react-icons/rx"
import { VscWorkspaceTrusted } from "react-icons/vsc"
 
interface Todo {
  id: number
  todo: string
}

interface DataProps {
  data: Todo[]
  handleDelete: (id: number) => void
  handleEdit: (id: number, currentTodo: string) => void
  handleComplete: (id: number) => void
  complete: Todo[]  
  handlecDelete : (id : number) => void
}

function Data({ data, handleDelete, handleEdit, handleComplete, complete, handlecDelete }: DataProps) {
  // Common button styling classes for reusability
  const buttonStyle =
    'rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none mx-4'

  return (
    <>
      <div className='container mx-auto'>
        <div className='flex justify-center'>
          <div className='xl:w-[50%]'>
            <h1 className='text-3xl font-bold text-black mb-4'>{data.length ? "Working Todo" : ""}</h1>
            {data.map((i) => (
              <ul key={i.id} className='my-2 flex justify-between items-center rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#151212] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none mx-4'>
                <li>Todo: {i.todo}</li>
                <div className='flex items-center'>
                  <button
                    onClick={() => handleDelete(i.id)}
                    className={`${buttonStyle} text-[1.1rem] text-red-700`}
                  >
                    <RiDeleteBin5Line />
                  </button>
                  <button
                    onClick={() => handleEdit(i.id, i.todo)}
                    className={`${buttonStyle} text-green-700`}
                  >
                    <RxUpdate />
                  </button>
                  <button
                    onClick={() => handleComplete(i.id)}
                    className={`${buttonStyle} text-yellow-700`}
                  >
                    <VscWorkspaceTrusted />
                  </button>
                </div>
              </ul>
            ))}
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='xl:w-[50%]'>
            <h1 className='text-3xl font-bold text-black mb-4'>{complete.length ? "Completed Todo" : ""}</h1>
            {complete.map((i) => (
              <ul key={i.id} className='my-2 flex justify-between items-center rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#151212] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none mx-4'>
                <li>Todo: {i.todo}</li>
                <div className='flex items-center'>
                  <button
                    onClick={() => handlecDelete(i.id)}
                    className={`${buttonStyle} text-[1.1rem] text-red-700`}
                  >
                    <RiDeleteBin5Line /> 
                  </button> 
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Data
