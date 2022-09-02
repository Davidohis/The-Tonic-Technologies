import styled from "styled-components";

export const CustomersSectionWrapper = styled.div`
  margin: 14rem 0px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 10rem 0px;
  }
`;

export const CustomersText2 = styled.p`
  max-width: 100%;
  padding: 2.5rem 0px 2.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  padding-bottom: 30px;
  border-bottom: 3.1px solid #c4c4c4;
  color: #000000;
  background: ${(props) => props.bg};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 420px;
    line-height: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    line-height: 24px;
  }
`;

export const Icon = styled.img`
  display: block;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: end;
  align-items: flex-end;
`;

export const CustomersWrapper = styled.section`
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

  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 0px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const CustomersSectionFlex = styled.div`
  width: 45%;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 55%;
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

export const CustomersText = styled.h2`
  font-size: ${(props) => (props.main ? "40px" : "30px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  width: max-content;
  text-align: left;
  max-width: 100%;
  margin-bottom: 5px;
  font-style: normal;
  font-weight: 400;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: ${(props) => (props.main ? "40px" : "32px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
    width: 650px;
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

export const BackgroundImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 100%;
  object-fit: contain;
  margin-bottom: 4rem;
`;
