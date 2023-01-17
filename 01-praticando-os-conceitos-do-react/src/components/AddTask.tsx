import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent } from "react";

import styles from "./AddTask.module.scss";

interface AddTaskProps {
  taskName: string;
  handleAddNewTaskName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleAddNewTask: (event: FormEvent) => void;
}

export function AddTask({
  taskName,
  handleAddNewTask,
  handleAddNewTaskName,
}: AddTaskProps) {
  return (
    <form className={styles.form} onSubmit={handleAddNewTask}>
      <input
        type="text"
        name="taskName"
        value={taskName}
        placeholder="Adicione uma nova tarefa"
        onChange={handleAddNewTaskName}
        required
      />
      <button type="submit">
        Criar <PlusCircle />{" "}
      </button>
    </form>
  );
}
