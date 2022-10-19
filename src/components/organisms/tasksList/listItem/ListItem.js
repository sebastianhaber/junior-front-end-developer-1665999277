import { TASK_STATUS } from "../../../../mocked/tasks";
import CheckIcon from "../../../../assets/list_icons/check.svg";
import ActiveIcon from "../../../../assets/list_icons/active.svg";
import LockIcon from "../../../../assets/list_icons/lock.svg";
import { StyledItem } from "./ListItem.styles";

function ListItem({ task, ...props }) {
  return (
    <StyledItem
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
    </StyledItem>
  );
}

export default ListItem;
