import styled from "styled-components";

export const NavbarSection = styled.section`
  height: 120px;
  margin: 0 auto;
  max-width: 1240px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
`;

export const NavBar = styled.nav`
  background: transparent;
  margin-bottom: 80px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  z-index: 50;
  width: 100%;
  transition: background-color 0.3s ease-in;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0px 3rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: start;
  height: 80px;

  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const NavLogo = styled.a`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  z-index: 50;
`;

export const NavIcon = styled.img`
  margin-right: 1rem;
  width: 100%;
  height: 23px;
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;
  cursor: pointer;
  margin-top: 1rem;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 3rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transform: translateY(${({ show }) => (show ? "0" : "-10px")});
    transition: opacity 0.5s ease;
    background-color: #fff;
  }

  > li:first-child {
    margin-left: auto;
  }
`;

export const NavItem = styled.li`
  height: 50px;
  padding-right: 40px;
  cursor: pointer;
  box-shadow: 0 -1px 15pxrgba (0, 0, 0, 0.39);

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #0a2640;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #65e4a3;
    font-weight: 700;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1rem 0px;
    width: 100%;
    display: table;
    border: none;
  }
`;

export const NavBtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
