import React from "react";
import {
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLogo,
  SocialIcon,
  FooterRights,
  FooterWrapper,
  FooterAddress,
  FooterColumn,
  FooterGrid,
  FooterContainer,
} from "./FooterStyles";
import { footerData } from "../../constants/FooterData";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterGrid justify="space-between">
          <FooterColumn id="footerLogo">
            <FooterLogo to="/">
              <SocialIcon src="/assets/Logo.svg" alt={"logo"} />
            </FooterLogo>
            <FooterAddress>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </FooterAddress>
            <FooterRights>
              <p>All rights reserved.</p>
            </FooterRights>
          </FooterColumn>
          {footerData.map((footerItem, index) => (
            <FooterLinkItems key={index}>
              <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
              {footerItem.links.map((link, linkIndex) => (
                <FooterLink key={linkIndex} to="/">
                  {link === "Careers" ? (
                    <>
                      {link} <span>{footerItem.hiring}</span>
                    </>
                  ) : (
                    <>{link}</>
                  )}
                </FooterLink>
              ))}
            </FooterLinkItems>
          ))}
        </FooterGrid>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
