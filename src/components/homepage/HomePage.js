import React, { useState } from "react";
import { tasksList } from "../../mocked/tasks";
import BusinessContext from "../organisms/businessContext";
import TaskListWrapper from "../organisms/tasksList/TaskListWrapper";
import { StyledWrapper } from "./HomePage.styled";

function HomePage() {
  const [activeTask, setActiveTask] = useState(tasksList[0]);

  return (
    <StyledWrapper>
      <TaskListWrapper setActiveTask={setActiveTask} />
      <BusinessContext activeTask={activeTask} />
    </StyledWrapper>
  );
}

export default HomePage;
