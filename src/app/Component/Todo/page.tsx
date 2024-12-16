"use client"
import React from 'react'

interface Props {
  ent : string
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleSend: () => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Page({ todo, setTodo, handleSend, handleChange,ent }: Props) {
  return (
    <>
      <div className='container mx-auto my-6'>
        <div className='flex justify-center'>
          <input
            type="text"
            onChange={handleChange}
            value={todo}
            className='border-2 border-black border-dashed rounded px-6 py-3 font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none w-[45%]'
            placeholder={todo ? 'Update your todo' : 'Enter your todo'}
          />
          <button
            onClick={handleSend}
            className='rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#151212] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none mx-4'
          >
            {ent ? 'Update Todo' : 'Add Todo'}
          </button>
        </div>
      </div>
    </>
  )
}
