import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  font-size: 0.5rem;
  font-weight: 500;
  color: #6b778c;
  ul {
    display: flex;
    gap: 1rem;
    li:first-child {
      list-style: none;
    }
    li:not(li:first-child) {
      padding-left: 0.5rem;
    }
  }
`;
