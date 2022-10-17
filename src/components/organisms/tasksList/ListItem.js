import { TASK_STATUS } from "../../../mocked/tasks";
import { StyledListItem } from "./styles";
import CheckIcon from "../../../assets/list_icons/check.svg";
import ActiveIcon from "../../../assets/list_icons/active.svg";
import LockIcon from "../../../assets/list_icons/lock.svg";

function ListItem({ task, ...props }) {
  return (
    <StyledListItem
      isBlocked={task.status === TASK_STATUS.isBlocked}
      isActive={task.status === TASK_STATUS.isActive}
      {...props}
    >
      <img
        src={
          task.status === TASK_STATUS.isActive
            ? ActiveIcon
            : task.status === TASK_STATUS.isCompleted
            ? CheckIcon
            : LockIcon
        }
        alt=""
      />
      {task.title}
    </StyledListItem>
  );
}

export default ListItem;
