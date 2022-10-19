import styled from "styled-components";

export const StyledTaskListWrapper = styled.section`
  flex: 1;
  max-width: 320px;
  width: 100%;

  border-radius: 12px;
  background-color: white;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);

  font-size: 12px;
  overflow: hidden;
  header {
    font-weight: 600;
    text-transform: uppercase;

    padding: 1rem 1.5rem;
    height: 65px;

    display: flex;
    place-items: center;

    border-bottom: 1px solid #f4f5f7;
  }

  @media (max-width: 768px) {
    max-width: unset;
  }
`;
export const StyledTasks = styled.ul`
  padding: 1rem 1.5rem;
  line-height: 1.5;
  font-weight: 500;
  list-style: none;

  display: flex;
  flex-direction: column;

  max-height: 600px;
  overflow-y: scroll;
`;
export const StyledListItem = styled.li`
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
