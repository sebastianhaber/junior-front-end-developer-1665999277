import React from "react";
import { StyledHeader } from "./Header.styled";
import LogoSVG from "../../assets/logo.svg";
import ProfileImage from "../../assets/profile_image.png";
import Image from "../../utils/Image";

function Header() {
  return (
    <StyledHeader>
      <img src={LogoSVG} alt="nerds.family" />
      <Image url={ProfileImage} alt="Sebastian Haber" />
    </StyledHeader>
  );
}

export default Header;
