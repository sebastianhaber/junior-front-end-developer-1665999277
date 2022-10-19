import styled from "styled-components";

export const StyledHeader = styled.nav`
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    display: block;
  }
  @media (max-width: 500px) {
    img#logo {
      width: 120px;
    }
  }
`;
