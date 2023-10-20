import { ITasks } from "@/types/task";

const baseUrl = "http://localhost:3001";

// tohle je FC ktera me fetchuje rawData ktery musim pasnout pres JSON a pak si tuhle FC zavolame v page.tsx kde je budu renderovat
export const getAllTodos = async (): Promise<ITasks[]> => {
  const rawData = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
  const todos = await rawData.json();
  return todos;
};

// tedka vytvarim funkci ktere me bude ukladat do databaze to co napisu do imputu jako novy task
// tuhle funkci si zavolam v AddTask.tsx v submit handler fuknci.

export const addToDo = async (todo: ITasks): Promise<ITasks[]> => {
  const newData = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await newData.json();
  return newTodo;
};

// Tuhle fuknci potrebuji na Updatovani Tasks // stejnej process jak u addToDo func. ale method je zmenena na PUT(update)

export const updateToDo = async (todo: ITasks): Promise<ITasks[]> => {
  const oldData = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await oldData.json();
  return updatedTodo;
};

// DELETE

export const deleteToDo = async (id: string): Promise<void> => {
  const deleteTask = await fetch(`${baseUrl}/tasks/${id}`, {
    method: "DELETE",
  });
};
