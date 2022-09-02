import styled, { keyframes } from "styled-components";
import { bounceIn, fadeInDown } from "react-animations";

const bounceAnimation = keyframes`${bounceIn}`;
const fadeAnimation = keyframes`${fadeInDown}`;

export const HeroSections = styled.section`
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
  margin: 0 auto;
  max-width: 1240px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: block;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px px 0;
    display: block;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0px;
    width: calc(100vw - 32px);
    display: block;
    flex-direction: column;
  }
`;

export const HeroSectionWrapper = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
  margin: 0 auto;
  justify-content: space-between;
  max-width: 1240px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  width: 50%;
  animation: 1s ${fadeAnimation};

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 600px;
    max-width: 600px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const HeroSectionTitle = styled.h2`
  font-size: ${(props) => (props.main ? "48px" : "36px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  width: 100%;
  text-align: left;
  max-width: 100%;
  margin-bottom: 5px;
  font-style: normal;
  font-weight: 400;

  padding: ${(props) => (props.main ? "28px 0 16px" : "0")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "40px" : "34px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

export const HeroSectionText2 = styled.p`
  max-width: 100%;
  font-size: 22px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: #777777;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 420px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const HeroBackgroundImage = styled.img`
  display: block;
  animation: 1s ${bounceAnimation};

  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin: 3rem 0px;
    display: block;
  }
`;
