import React from "react";
import { StyledTaskListWrapper } from "./styles";
import Tasks from "./Tasks";

function TaskListWrapper() {
  return (
    <StyledTaskListWrapper>
      <header>Your tasks</header>
      <Tasks />
    </StyledTaskListWrapper>
  );
}

export default TaskListWrapper;
