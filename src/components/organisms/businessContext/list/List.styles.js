import styled from "styled-components";
import { BUSINESS_CONTEXT_STATUS } from "../../../../mocked/tasks";

export const StyledList = styled.div`
  height: 715px;
  width: calc(304px + 0.5rem);

  overflow-y: scroll;

  ul.wrapper {
    list-style: none;
    background-color: #f4f5f7;
    border-bottom-left-radius: 12px;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    padding: 0.25rem;
    height: 100%;
  }
  @media (max-width: 1100px) {
    width: 100%;
    height: auto;
    ul.wrapper {
      border-radius: 12px;
    }
  }
`;

export const StyledItem = styled.li`
  background-color: white;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  border: 1px solid transparent;

  padding: 10px 20px;

  min-height: 105px;
  /* max-width: 304px; */
  width: 100%;

  cursor: pointer;
  overflow: hidden;

  transition: border-color 0.2s ease-in-out;

  &:active {
    transform: scale(0.98);
  }
  &:hover {
    border-color: #0165ff;
  }

  .heading {
    position: relative;

    display: flex;
    align-items: center;
    gap: 10px;

    font-weight: 500;
    color: #6b778c;
    font-size: 10px;
    line-height: 1.4;

    // "new" badge
    ${(props) =>
      props.status === BUSINESS_CONTEXT_STATUS.notRead &&
      `
            &::before {
            content: "New";
            border-radius: 0.25rem;
            background-color: #0165ff;
            padding: 0.25rem 0.5rem;
            color: white;
            }
        `}
  }
  .title {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.5;
    margin-top: 0.5rem;
    ${(props) =>
      props.status === BUSINESS_CONTEXT_STATUS.notRead &&
      `
      font-weight: 700;
        color: #0165FF;
        
    `}
  }
  .message {
    font-size: 10px;
    font-size: 1.4;
    margin-top: 5px;
    color: #6b778c;
  }

  // statuses
  ${(props) =>
    props.status === BUSINESS_CONTEXT_STATUS.activeTask
      ? `
          box-shadow: 0px 8px 16px rgba(84, 84, 84, 0.2);
        `
      : props.status === BUSINESS_CONTEXT_STATUS.read &&
        `
            background-color: transparent;
            box-shadow: unset;
        `}
`;
