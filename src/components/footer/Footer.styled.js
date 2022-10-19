import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;

  font-size: 0.5rem;
  font-weight: 500;
  color: #6b778c;

  margin: 1rem 0;
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
