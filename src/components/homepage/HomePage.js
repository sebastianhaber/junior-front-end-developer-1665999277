import React, { useState, useEffect } from "react";
import { tasksList } from "../../mocked/tasks";
import TaskListWrapper from "../organisms/tasksList/TaskListWrapper";
import { StyledWrapper } from "./HomePage.styled";

function HomePage() {
  const [activeTask, setActiveTask] = useState(null);

  useEffect(() => {
    setActiveTask(tasksList[0]);
  }, []);
  return (
    <StyledWrapper>
      <TaskListWrapper setActiveTask={setActiveTask} />
    </StyledWrapper>
  );
}

export default HomePage;
