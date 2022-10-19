import styled from "styled-components";

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;

  border-radius: 0.5rem;

  ${(props) =>
    props.isBlocked &&
    `
      cursor: default;
      color: #AEB5C1;
    `}

  ${(props) => props.isActive && `font-weight: 600;`}


  &:hover {
    background-color: ${(props) => (props.isBlocked ? `white` : `#0165ff20`)};
  }
`;
