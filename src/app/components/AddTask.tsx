'use client'
import React, { FormEventHandler, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Modal from './Modal'
import { addToDo } from '@/api'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/navigation'


const AddTask = () => {

    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [newTaskValue, setNewTaskValue] = useState<string>("")
    const router = useRouter()

    const submitHandlerNewTodo: FormEventHandler<HTMLFormElement> = async (event) => {
        await addToDo({
            id: nanoid(),
            text: newTaskValue
        })
        event.preventDefault()
        setNewTaskValue("")
        console.log(submitHandlerNewTodo)
        setModalOpen(false)
        router.refresh()
    }


    return (
        <div>
            <button onClick={() => setModalOpen(true)} className='btn w-full bg-orange-500 text-gray-200 hover:text-orange-500'>Add New Task <AiOutlinePlusCircle className="text-[20px]" /></button>
            {modalOpen && <Modal setModalOpen={setModalOpen} >
                <form onSubmit={submitHandlerNewTodo}>
                    <h3 className='bold text-2xl text-center underline mb-4'>Add New ToDo!</h3>
                    <button onClick={() => setModalOpen(false)} className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <input type="text"
                        placeholder="Type your new task here..."
                        className="input input-bordered w-full mx-auto"
                        value={newTaskValue}
                        onChange={(event) => setNewTaskValue(event.target.value)}
                    />
                    <button type='submit' className='btn w-full mt-6 hover:bg-orange-500 hover:text-gray-300 text-orange-500 border-none tracking-widest'>Submit</button>
                </form>
            </Modal>}
        </div >
    )
}

export default AddTask
