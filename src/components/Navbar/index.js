import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import {
  NavBar,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavbarSection,
} from "./NavbarStyles.js";
import { data } from "../../constants/NavbarData";
import { Button } from "../../styles/GlobalComponents/index.js";

function NavbarComponent() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const closeMobileMenu = (to, id) => {
    setShow(false);
  };

  return (
    <NavbarSection>
      <IconContext.Provider value={{ color: "#fff" }}>
        <NavBar>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon src="/assets/Logo.svg" alt={"logo"} />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {show ? <FaTimes color="#000" /> : <CgMenuRight color="#000" />}
            </MobileIcon>
            <NavMenu show={show}>
              {data.map((el, index) => (
                <NavItem key={index}>
                  <NavLinks
                    onClick={() => closeMobileMenu(el.to, el.id)}
                    id={el.id}
                  >
                    {el.text}
                  </NavLinks>
                </NavItem>
              ))}

              <Button bg={"#fff"} color={"#0a2640"}>
                Login
              </Button>
            </NavMenu>
          </NavbarContainer>
        </NavBar>
      </IconContext.Provider>
    </NavbarSection>
  );
}

export default NavbarComponent;
