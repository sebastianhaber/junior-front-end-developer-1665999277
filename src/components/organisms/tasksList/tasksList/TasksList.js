import { useContext, useState } from "react";
import { AppContext } from "../../../../context/Context";
import { tasksList, TASK_STATUS } from "../../../../mocked/tasks";
import ListItem from "../listItem/ListItem";
import { StyledList } from "./TasksList.styles";

function Tasks() {
  const [tasks, setTasks] = useState(tasksList);
  const { setActiveTask } = useContext(AppContext);

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
    <StyledList>
      {tasks.map((task, index) => (
        <ListItem key={index} task={task} onClick={() => handleChange(task)} />
      ))}
    </StyledList>
  );
}

export default Tasks;
