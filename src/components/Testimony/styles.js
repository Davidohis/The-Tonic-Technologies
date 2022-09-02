import styled from "styled-components";

export const ServiceWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0a2640;
  padding: 5rem 0px;
  margin: 5rem 0px;
`;

export const OurServicesTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
  color: #fff;
  margin-bottom: 6rem;
  padding: 0 13rem;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 5rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    font-size: 23px;
    line-height: 50px;
    margin-bottom: 3rem;
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const OurServicesCard = styled.div`
  border-radius: 10px;
  text-align: center;
  margin-top: ${(props) => props.top};
  width: 90%;
  height: 380px;
  transition: 0.2s ease;
  background: #ffffff;
  color: #000000;
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 3rem 2rem;
  &:hover {
    transform: scale(1.1);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    &:hover {
      transform: scale(1);
    }
  }
`;
export const TitleContent = styled.div`
  z-index: 20;
  width: 100%;
  margin-top: 7%;
`;

export const HeaderThree = styled.h3`
  padding: 0.5rem 0;
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
`;

export const FooterList = styled.div`
  list-style-type: none;
  padding: 5px 0px;
  display: flex;
  justify-content: baseline;
  align-items: center;
  margin: 0.8rem 0;
  line-height: 30px;
  color: #000000;

  & div {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 15px;

    & p {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 32px;
      color: #0a2640;
    }
  }
`;

export const Avater = styled.img`
  margin: 0px;
  overflow: hidden;
`;

export const TestWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
    text-align: center;
  }
`;
export const OurServicesButton = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
    text-align: center;
  }
`;
