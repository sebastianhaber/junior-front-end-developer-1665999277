import styled from "styled-components";

export const StyledWrapper = styled.section`
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
