import { StyledWrapper } from "./TaskListWrapper.styles";
import TasksList from "./tasksList/TasksList";

function TaskListWrapper() {
  return (
    <StyledWrapper>
      <header>Your tasks</header>
      <TasksList />
    </StyledWrapper>
  );
}

export default TaskListWrapper;
