import {
  ContextWrapper,
  StyledBusinessContextWrapper,
} from "./BusinessContext.styles";
import DiscoverIcon from "../../../assets/discover_icon.svg";
import ContextList from "./list/ContextList";
import { useState } from "react";
import Content from "./content/Content";

function BusinessContext({ activeTask }) {
  const [content, setContent] = useState(activeTask?.businessContext[0]);
  return (
    <StyledBusinessContextWrapper>
      <header>
        <div>
          <img src={DiscoverIcon} alt="" />
          <p>Business Context</p>
        </div>
      </header>
      <ContextWrapper>
        <ContextList activeTask={activeTask} setContent={setContent} />
        <Content content={content} />
      </ContextWrapper>
    </StyledBusinessContextWrapper>
  );
}

export default BusinessContext;
