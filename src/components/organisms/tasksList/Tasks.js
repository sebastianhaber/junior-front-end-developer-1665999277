import { useState } from "react";
import { tasksList, TASK_STATUS } from "../../../mocked/tasks";
import ListItem from "./ListItem";
import { StyledTasks } from "./styles";

function Tasks({ setActiveTask }) {
  const [tasks, setTasks] = useState(tasksList);

  const handleChange = (task) => {
    if (task.status !== TASK_STATUS.isBlocked) {
      const newArray = tasks.map((item) => {
        if (item.status === TASK_STATUS.isActive)
          item.status = TASK_STATUS.isCompleted;

        if (item === task) item.status = TASK_STATUS.isActive;
        return item;
      });
      setTasks(newArray);
      setActiveTask(task);
    }
  };

  return (
    <StyledTasks>
      {tasks.map((task, index) => (
        <ListItem key={index} task={task} onClick={() => handleChange(task)} />
      ))}
    </StyledTasks>
  );
}

export default Tasks;
