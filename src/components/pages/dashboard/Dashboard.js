import BusinessContext from "../../organisms/businessContext";
import TaskListWrapper from "../../organisms/tasksList/TaskListWrapper";
import { StyledWrapper } from "./Dashboard.styled";

function Dashboard() {
  return (
    <StyledWrapper>
      <TaskListWrapper />
      <BusinessContext />
    </StyledWrapper>
  );
}

export default Dashboard;
