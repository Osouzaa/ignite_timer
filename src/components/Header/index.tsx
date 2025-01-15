import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo da empresa" />
        <nav>
            <NavLink to="/" title="Timer">
              <Timer size={24} />
            </NavLink>
            <NavLink to="/history" title="Histórico">
              <Scroll size={24} />
            </NavLink>
        </nav>
    </HeaderContainer>
  )
}