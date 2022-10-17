import React from "react";
import { StyledFooter } from "./Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <ul>
        <li>Terms of Service</li>
        <li>Privacy policy</li>
        <li>Copyright</li>
      </ul>
      <ul>
        <li>nerds.family Version 1.2</li>
        <li>Last update 10/09/2022</li>
      </ul>
    </StyledFooter>
  );
}
