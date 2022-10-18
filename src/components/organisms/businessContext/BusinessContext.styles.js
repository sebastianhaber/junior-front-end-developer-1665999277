import styled from "styled-components";

export const StyledBusinessContextWrapper = styled.section`
  flex: 1;

  height: 785px;

  background-color: white;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);

  border-radius: 12px;
  overflow: hidden;
  header {
    box-shadow: 0px 1px 0px #f4f5f7;
    padding: 0 3rem;
    height: 66px;

    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    color: #0165ff;

    div {
      position: relative;

      display: flex;
      gap: 1rem;
      align-items: center;

      width: fit-content;
      padding: 24px 0;
      cursor: pointer;

      &::after {
        content: "";
        height: 2px;
        width: 100%;
        position: absolute;
        bottom: 0;
        background-color: #0165ff;
      }

      img {
        display: block;
        width: 1rem;
        height: 1rem;
      }
    }
  }
`;
export const ContextWrapper = styled.div`
  display: flex;
  padding: 0 0.25rem 0.25rem;
  height: 100%;
`;
