import styled from "styled-components";

export const StyledTaskListWrapper = styled.section`
  width: 320px;

  border-radius: 12px;
  background-color: white;

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
