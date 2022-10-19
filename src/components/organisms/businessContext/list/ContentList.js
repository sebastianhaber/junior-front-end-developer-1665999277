import { useContext, useEffect } from "react";
import Item from "./Item";
import { BUSINESS_CONTEXT_STATUS } from "../../../../mocked/tasks";
import { StyledList } from "./List.styles";
import { AppContext } from "../../../../context/Context";

function ContentList() {
  const { activeTask, setActiveBusinessContext, changeContentStatus } =
    useContext(AppContext);

  const handleChange = (item) => {
    setActiveBusinessContext(item);
    changeContentStatus(item);
  };

  useEffect(() => {
    if (activeTask) {
      // find active item
      const activeItem = activeTask.businessContext.find(
        (item) => item.status === BUSINESS_CONTEXT_STATUS.activeTask
      );

      // if activeItem was not found
      // set active item to first item of an array
      if (!activeItem) {
        activeTask.businessContext[0].status =
          BUSINESS_CONTEXT_STATUS.activeTask;
        setActiveBusinessContext(activeTask.businessContext[0]);
      } else setActiveBusinessContext(activeItem);
    }
  }, [activeTask, setActiveBusinessContext]);

  return (
    <StyledList>
      <ul className="wrapper">
        {activeTask?.businessContext.map((item, index) => (
          <Item
            item={item}
            key={index}
            index={index}
            onClick={() => handleChange(item)}
          />
        ))}
      </ul>
    </StyledList>
  );
}

export default ContentList;
