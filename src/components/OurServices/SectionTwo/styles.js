import styled from "styled-components";

export const SectionTwoWrapper = styled.section`
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

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
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

export const SectionTwoTitle = styled.h2`
  font-size: ${(props) => (props.main ? "40px" : "36px")};
  line-height: ${(props) => (props.main ? "60px" : "56px")};
  width: max-content;
  text-align: left;
  max-width: 100%;
  margin-bottom: 5px;
  font-style: normal;
  font-weight: 400;

  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: ${(props) => (props.main ? "40px" : "32px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
    width: 650px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 50px;
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

export const SectionTwoText2 = styled.p`
  max-width: 100%;
  padding: 2.5rem 0px 2.5rem 2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: baseline;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 32px;
  color: ${(props) => props.color};
  background: ${(props) => props.bg};
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);
  border-radius: 4px;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 420px;
    line-height: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    line-height: 24px;
  }
`;

export const BackgroundImage = styled.img`
  top: 50%;
  left: 50%;
  transform: translate(0%, 5%);
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
    margin: 1.5rem 0px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    top: 50%;
    left: 0%;
    transform: translate(0%, 0%);
    margin: 2.5rem 0px;
    display: block;
  }
`;

export const Check = styled.img`
  display: block;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;
