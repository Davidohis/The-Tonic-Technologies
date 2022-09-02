import styled from "styled-components";

export const ServiceWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0a2640;
  padding: 5rem 0px;
  margin: 5rem 0px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
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
  padding: 0px 5rem;

  & span {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #f1f1f1;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    font-size: 23px;
    line-height: 50px;
    margin-bottom: 3rem;
    padding: 0px;
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
  width: 90%;
  transition: 0.2s ease;
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
  color: #ffffff;
`;

export const FooterList = styled.div`
  list-style-type: none;
  padding: 5px 0px;
  display: flex;
  justify-content: baseline;
  align-items: center;
  margin: 0.8rem 0;
  line-height: 30px;
  padding-bottom: 2px;
  border-bottom: 3.1px solid #ffffff;
  width: fit-content;

  & a {
    color: #ffffff;
    line-height: 50px;
    :hover {
      color: #65e4a3;
    }
  }
  & svg {
    margin-left: 15px;
    :hover {
      color: #65e4a3;
    }
  }

  :hover {
    border-bottom: 3.1px solid #65e4a3;
  }
`;

export const ServinceSectionWrapper = styled.div`
  margin: 10rem 0px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 5rem 0px;
  }
`;
