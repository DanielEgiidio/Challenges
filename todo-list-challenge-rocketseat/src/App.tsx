import { useState } from "react";
import Header from "./components/Header";
import TaskHeader from "./components/Tasks/taskHeader";

export interface ITasks {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([
  {
    id: "teste",
    title: "teste",
    isCompleted: true
  },
  {
    id: "teste2",
    title: "teste2",
    isCompleted: false
  },
  ])

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks, 
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ]);
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <TaskHeader tasks={tasks} />
    </>
  );
}

export default App;
