import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
