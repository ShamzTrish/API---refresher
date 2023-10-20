import { ITasks } from '@/types/task'
import React from 'react'
import Task from './Task'

interface TaskListProps {
    tasks: ITasks[]
}

const TasksList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto border rounded-md m-8">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='border-b-orange-500 text-gray-300'>
                        <th>#</th>
                        <th>Task</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((oneTask, index) => {
                            return <Task key={oneTask.id} oneTask={oneTask} index={index} />
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default TasksList
