import React from "react";
import { StyledTaskListWrapper } from "./styles";
import Tasks from "./Tasks";

function TaskListWrapper({ setActiveTask }) {
  return (
    <StyledTaskListWrapper>
      <header>Your tasks</header>
      <Tasks setActiveTask={setActiveTask} />
    </StyledTaskListWrapper>
  );
}

export default TaskListWrapper;
