import { ClipboardText } from "phosphor-react";
import { Task } from "../App";
import { TaskItem } from "./TaskItem";

import styles from "./TaskList.module.scss";

interface TaskListProps {
  tasks: Task[];
  handleRemoveTaskById: (id: string) => void;
  handleUpdateTaskStatusById: (id: string) => void;
}

export function TaskList({
  tasks,
  handleRemoveTaskById,
  handleUpdateTaskStatusById,
}: TaskListProps) {
  const totalTasks = tasks.length;

  const totalTalksCompleted = tasks.reduce((previousValue, currentValue) => {
    if (currentValue.isDone) {
      previousValue++;
    }
    return previousValue;
  }, 0);

  return (
    <section className={styles.taskContainer}>
      <div className={styles.taskInfo}>
        <h3 className={styles.createdTasks}>
          Tarefas criadas <span>{totalTasks}</span>
        </h3>
        <h3 className={styles.completedTasks}>
          Concluídas
          <span>
            {totalTalksCompleted} de {totalTasks}
          </span>
        </h3>
      </div>
      {/* task list */}
      <ul className={styles.taskList}>
        {tasks.length === 0 && (
          <li className={styles.noTasks}>
            <ClipboardText />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <br /> Crie tarefas e organize seus itens a fazer
            </p>
          </li>
        )}
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleRemoveTaskById={handleRemoveTaskById}
            handleUpdateTaskStatusById={handleUpdateTaskStatusById}
          />
        ))}
      </ul>
    </section>
  );
}
