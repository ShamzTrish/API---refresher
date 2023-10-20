'use client'

import React, { useState } from 'react'
import { ImBin2 } from 'react-icons/im'
import { BiEdit } from 'react-icons/bi'
import { ITasks } from '@/types/task'
import Modal from './Modal'
import { deleteToDo, updateToDo } from '@/api'
import { useRouter } from 'next/navigation'

export interface TaskProps {
    oneTask: ITasks
    index: number
    setModalOpen: (open: boolean) => boolean | void
}

const Task: React.FC<TaskProps> = ({ oneTask, index, setModalOpen }) => {

    const [modalDelete, setModalDelete] = useState<boolean>(false)
    const [modalEdit, setModalEdit] = useState<boolean>(false)
    const [taskToEdit, setTaskToEdit] = useState<string>(oneTask.text)
    const router = useRouter()

    const editHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateToDo({
            id: oneTask.id,
            text: taskToEdit,
        });
        router.refresh()
        setModalEdit(false)
    };

    const deleteHandler = (id: string) => {
        deleteToDo(id)
    }

    const number = index + 1
    return (
        <tr key={oneTask.id}>
            <th>{number}</th>
            <td>{oneTask.text}</td>
            <td className='flex gap-6'>

                {/* DELETE */}
                <span onClick={() => setModalDelete(true)}><ImBin2 className='text-lg hover:text-red-500 cursor-pointer' /></span>
                {modalDelete && <Modal setModalOpen={setModalOpen} >
                    <form>
                        <button onClick={() => setModalDelete(false)} className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className='bold text-2xl text-center underline mb-4'>Are you sure?</h3>
                        <button onClick={() => deleteHandler(oneTask.id)} type='submit' className='btn w-full mt-6 hover:bg-orange-500 hover:text-gray-300 text-orange-500 border-none tracking-widest'>DELETE</button>

                    </form>
                </Modal>}

                {/* EDIT  */}
                <span onClick={() => setModalEdit(true)}><BiEdit className='text-xl hover:text-green-500 cursor-pointer' /></span>
                {modalEdit && <Modal setModalOpen={setModalOpen} >
                    <form onSubmit={editHandler}>
                        <button onClick={() => setModalEdit(false)} className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className='bold text-2xl text-center underline mb-4'>Edit your Task.</h3>
                        <input type="text"
                            placeholder="Type your new task here..."
                            className="input input-bordered w-full mx-auto"
                            value={taskToEdit}
                            onChange={(event) => setTaskToEdit(event.target.value)}
                        />
                        <button type='submit' className='btn w-full mt-6 hover:bg-orange-500 hover:text-gray-300 text-orange-500 border-none tracking-widest'>Submit</button>
                    </form>
                </Modal>}
            </td>

        </tr>
    )
}

export default Task
