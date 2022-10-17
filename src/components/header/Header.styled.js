import styled from "styled-components";

export const StyledHeader = styled.nav`
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    display: block;
  }
  .profileImage__wrapper {
    border: 1px solid #6b778c;
    border-radius: 50%;
    width: 46px;
    height: 46px;
    display: grid;
    place-content: center;
    cursor: pointer;
    &__image {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
  }
`;
