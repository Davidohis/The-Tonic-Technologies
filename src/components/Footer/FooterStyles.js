import styled from "styled-components";
import { Column, Row } from "../../styles/GlobalComponents";

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 1rem 40px 10rem 40px;
  background-color: #fff;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const FooterWrapper = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #000000;
`;

export const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterRow = styled(Row)`
  flex-wrap: wrap;
  @media screen and (max-width: 820px) {
    > div {
      width: 20%;
    }

    > div:first-child {
      width: 100%;
    }
  }

  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: center;

    * {
      width: 100%;
      text-align: center;
    }
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
  justify-content: center;
  align-items: center;
`;

export const FooterColumn = styled(Column)`
  display: flex;
  justify-content: baseline;
  @media screen and (max-width: 999px) {
    align-items: center;
    grid-column: 1/-1;
    margin-bottom: 1rem;
  }
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  text-align: left;
  color: #000000;

  @media screen and (max-width: 1000px) {
    align-items: center;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  font-weight: 500;
`;

export const FooterLink = styled.a`
  color: #777777;
  text-decoration: none;
  margin-bottom: 1.4rem;
  line-height: 40px;
  cursor: pointer;
  &:hover {
    color: #0a2640;
    transition: 0.3s ease-out;
  }

  & span {
    width: 72px;
    height: 30px;
    background: #65e4a3;
    border-radius: 120px;
    padding: 1rem 1.5rem;
    color: #0a2640;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

export const FooterLogo = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  margin-bottom: 1px;
  display: flex;
  justify-content: baseline;

  @media screen and (max-width: 960px) {
    margin-top: 10rem;
  }
`;

export const SocialIcon = styled.img`
  width: 160px;
  height: auto;
`;

export const FooterRights = styled.div`
  color: #000000;
  margin-bottom: 16px;
  width: 100%;
  font-size: 0.8rem;
  text-align: center;
  display: flex;
  justify-content: left;
  align-items: left;
  line-height: 30px;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const FooterSocialIcon = styled.a`
  color: #0553c8;
  font-size: 24px;
`;

export const FooterAddress = styled.div`
  font-style: normal;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #777777;
  margin: 2rem auto 2rem;
  max-width: 22rem;
  font-weight: 400;
  font-size: 1.3rem;

  @media screen and (min-width: 1000px) {
    margin-left: 0px;
    align-items: center;
    margin-right: 1rem;
  }
`;
