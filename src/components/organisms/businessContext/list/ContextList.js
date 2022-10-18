import { useContext, useEffect } from "react";
import Item from "./Item";
import { BUSINESS_CONTEXT_STATUS } from "../../../../mocked/tasks";
import { StyledList } from "./List.styles";
import { AppContext } from "../../../../context/Context";

function ContextList() {
  const { activeTask, setActiveBusinessContext } = useContext(AppContext);

  const handleChange = (item) => {
    setActiveBusinessContext(item);
  };

  useEffect(() => {
    if (activeTask) {
      setActiveBusinessContext(
        activeTask.businessContext.find(
          (item) => item.status === BUSINESS_CONTEXT_STATUS.activeTask
        )
      );
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

export default ContextList;
