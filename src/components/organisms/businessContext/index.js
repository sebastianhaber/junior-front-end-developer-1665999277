import {
  ContextWrapper,
  StyledBusinessContextWrapper,
} from "./BusinessContext.styles";
import DiscoverIcon from "../../../assets/discover_icon.svg";
import ContentList from "./list/ContentList";
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
        <ContentList />
        <Content />
      </ContextWrapper>
    </StyledBusinessContextWrapper>
  );
}

export default BusinessContext;
