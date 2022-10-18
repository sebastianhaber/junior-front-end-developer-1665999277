import { useEffect } from "react";
import Item from "./Item";
import { BUSINESS_CONTEXT_STATUS } from "../../../../mocked/tasks";
import { StyledList } from "./List.styles";

function ContextList({ activeTask, setContent }) {
  const handleChange = (item) => {
    setContent(item);
  };

  useEffect(() => {
    setContent(
      activeTask.businessContext.find(
        (item) => item.status === BUSINESS_CONTEXT_STATUS.activeTask
      )
    );
  }, [activeTask.businessContext, setContent]);

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
