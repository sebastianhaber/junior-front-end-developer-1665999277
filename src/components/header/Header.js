import { StyledHeader } from "./Header.styled";
import LogoSVG from "../../assets/logo.svg";
import Image from "../../utils/Image";

function Header() {
  return (
    <StyledHeader>
      <img src={LogoSVG} alt="nerds.family" id="logo" />
      <Image
        url="https://randus.org/photos/w/00181c3c3c3c1c1e.jpg"
        alt="Sebastian Haber"
      />
    </StyledHeader>
  );
}

export default Header;
