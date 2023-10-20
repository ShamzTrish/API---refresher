import AddTask from "./components/AddTask";
import { getAllTodos } from "@/api";
import TaskList from "./components/TaskList";

export default async function Home() {

  const tasks = await getAllTodos()


  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center">
        <h1 className="underline justify-center text-2xl">To Do ListApp</h1>
      </div>
      <TaskList tasks={tasks} />
      <AddTask />
    </main>
  )
}
