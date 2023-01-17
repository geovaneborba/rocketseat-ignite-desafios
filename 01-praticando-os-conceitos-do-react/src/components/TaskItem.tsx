import { Trash } from "phosphor-react";

import { Task } from "../App";

import styles from "./TaskItem.module.scss";

interface TaskProps {
  task: Task;
  handleRemoveTaskById: (id: string) => void;
  handleUpdateTaskStatusById: (id: string) => void;
}

export function TaskItem({
  task,
  handleRemoveTaskById,
  handleUpdateTaskStatusById,
}: TaskProps) {
  return (
    <li className={styles.taskItem}>
      <input
        type="checkbox"
        defaultChecked={task.isDone}
        onChange={() => handleUpdateTaskStatusById(task.id)}
      />
      <p className={task.isDone ? styles.taskDone : styles.taskNotDone}>
        {task.description}
      </p>
      <button title="Remove task" onClick={() => handleRemoveTaskById(task.id)}>
        <Trash />
      </button>
    </li>
  );
}
