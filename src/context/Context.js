import { useState, useEffect, createContext } from "react";
import {
  BUSINESS_CONTEXT_STATUS,
  tasksList,
  TASK_STATUS,
} from "../mocked/tasks";

export const AppContext = createContext({
  tasks: [],
  setTasks: () => {},
  activeTask: null,
  setActiveTask: () => {},
  activeBusinessContext: null,
  setActiveBusinessContext: () => {},
  changeContentStatus: () => {},
});

const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState(null);
  const [activeBusinessContext, setActiveBusinessContext] = useState(null);

  // logic of clicking on messages
  const changeContentStatus = (content) => {
    activeTask.businessContext.forEach((item) => {
      if (item === content) item.status = BUSINESS_CONTEXT_STATUS.activeTask;
      else if (item.status === BUSINESS_CONTEXT_STATUS.activeTask) {
        item.status = BUSINESS_CONTEXT_STATUS.read;
      }
    });
  };

  useEffect(() => {
    setTasks(tasksList);

    const active = tasksList.find(
      (task) => task.status === TASK_STATUS.isActive
    );
    setActiveTask(active || tasksList[0]);

    const businessContext = active
      ? active.businessContext.find(
          (item) => item.status === BUSINESS_CONTEXT_STATUS.activeTask
        )
      : active.businessContext[active.businessContext.length - 1];
    setActiveBusinessContext(businessContext);
  }, []);
  return (
    <AppContext.Provider
      value={{
        tasks,
        setTasks,
        activeTask,
        setActiveTask,
        activeBusinessContext,
        setActiveBusinessContext,
        changeContentStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
