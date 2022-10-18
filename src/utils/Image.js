import React from "react";
import styled from "styled-components";

function Image({ url, alt = "" }) {
  return (
    <Wrapper>
      <img src={url} alt={alt} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid #6b778c;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  display: grid;
  place-content: center;
  cursor: pointer;
  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
`;

export default Image;
