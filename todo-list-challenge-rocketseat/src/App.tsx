import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskHeader from "./components/Tasks/taskHeader";

const LOCAL_STORAGE_KEY = "todo:savedTask";

export interface ITasks {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  function setTaskAndSave(newTasks: ITasks[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  },);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTaskAndSave(JSON.parse(saved));
    }
  }

  function addTask(taskTitle: string) {
    if (!taskTitle.trim()) {  
      return;
    }

    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskId(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTaskAndSave(newTasks);
  }

  function toogleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTaskAndSave(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <TaskHeader
        tasks={tasks}
        onDelete={deleteTaskId}
        onComplete={toogleTaskCompletedById}
      />
    </>
  );
}

export default App;
