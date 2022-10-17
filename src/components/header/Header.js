import React from "react";
import { StyledHeader } from "./Header.styled";
import LogoSVG from "../../assets/logo.svg";
import ProfileImage from "../../assets/profile_image.png";

function Header() {
  return (
    <StyledHeader>
      <img src={LogoSVG} alt="nerds.family" />
      <div className="profileImage__wrapper">
        <img
          src={ProfileImage}
          alt="Sebastian Haber"
          className="profileImage__wrapper__image"
        />
      </div>
    </StyledHeader>
  );
}

export default Header;
