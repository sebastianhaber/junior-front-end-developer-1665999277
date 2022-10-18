import {
  ContextWrapper,
  StyledBusinessContextWrapper,
} from "./BusinessContext.styles";
import DiscoverIcon from "../../../assets/discover_icon.svg";
import ContextList from "./list/ContextList";
import Content from "./content/Content";

function BusinessContext() {
  return (
    <StyledBusinessContextWrapper>
      <header>
        <div>
          <img src={DiscoverIcon} alt="" />
          <p>Business Context</p>
        </div>
      </header>
      <ContextWrapper>
        <ContextList />
        <Content />
      </ContextWrapper>
    </StyledBusinessContextWrapper>
  );
}

export default BusinessContext;
