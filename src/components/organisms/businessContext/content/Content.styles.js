import styled from "styled-components";

export const StyledContent = styled.div`
  padding: 1rem 2rem;

  p.title {
    font-weight: 600;
    font-size: 21px;
    line-height: 33px;
  }

  .wrapper {
    display: flex;
    gap: 14px;
    margin-top: 11px;
    &__content {
      color: #6b778c;
      &__header {
        display: flex;
        align-items: center;
        gap: 4px;

        margin-top: 10px;

        font-size: 10px;
        line-height: 1.4;
        font-weight: 500;

        &__author {
          font-size: 1rem;
          line-height: 25px;
          color: #242325;
        }
      }

      &__message {
        white-space: pre-wrap;
        font-weight: 500;
        font-size: 12px;
        line-height: 2;

        max-width: 590px;
        width: 100%;
      }
    }
  }
`;
