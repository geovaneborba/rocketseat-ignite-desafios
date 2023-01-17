import {
  useState,
  FormEvent,
  ChangeEvent,
  useCallback,
  useEffect,
} from "react";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

import styles from "./App.module.scss";
import { AddTask } from "./components/AddTask";

export interface Task {
  id: string;
  description: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    /**
     * Obtendo as tarefas salvas no localStorage
     */
    const storageTasks = localStorage.getItem("@todo:tasks");

    /**
     * Se existir existe alguma tarefa
     * então retorne ela no formato de objeto
     */
    if (storageTasks) {
      return JSON.parse(storageTasks);
    } else {
      return [];
    }
  });
  const [taskName, setTaskName] = useState("");

  /**
   * Toda vez que é criado uma nova tarefa
   * então adiciona essa nova tarefa no localStorage
   */
  useEffect(() => {
    /**
     * Crio uma chave e salvo minha tarefa
     * no formato json no local storage do navegador
     */
    localStorage.setItem("@todo:tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddNewTask = useCallback(
    (event: FormEvent) => {
      event?.preventDefault();

      const task: Task = {
        id: uuidv4(),
        description: taskName,
        isDone: false,
      };

      setTasks([...tasks, task]);
      setTaskName("");
    },
    [taskName, tasks]
  );

  const handleAddNewTaskName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event?.preventDefault();

      const taskName = event.target.value.replace(/^\s+/, "");

      setTaskName(taskName);
    },
    []
  );

  const handleUpdateTaskStatusById = useCallback(
    (id: string) => {
      const taskWithUpdatedStatus = tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isDone: !task.isDone,
          };
        } else {
          return task;
        }
      });

      setTasks(taskWithUpdatedStatus);
    },
    [tasks]
  );

  const handleRemoveTaskById = useCallback(
    (id: string) => {
      const allTasksExceptOneDeletedById = tasks.filter(
        (task) => task.id !== id
      );

      setTasks(allTasksExceptOneDeletedById);
    },
    [tasks]
  );

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <AddTask
          handleAddNewTask={handleAddNewTask}
          handleAddNewTaskName={handleAddNewTaskName}
          taskName={taskName}
        />

        <TaskList
          tasks={tasks}
          handleRemoveTaskById={handleRemoveTaskById}
          handleUpdateTaskStatusById={handleUpdateTaskStatusById}
        />
      </main>
    </div>
  );
}

export default App;
