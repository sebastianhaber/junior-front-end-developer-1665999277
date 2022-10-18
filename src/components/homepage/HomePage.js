import BusinessContext from "../organisms/businessContext";
import TaskListWrapper from "../organisms/tasksList/TaskListWrapper";
import { StyledWrapper } from "./HomePage.styled";

function HomePage() {
  return (
    <StyledWrapper>
      <TaskListWrapper />
      <BusinessContext />
    </StyledWrapper>
  );
}

export default HomePage;
