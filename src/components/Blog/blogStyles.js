import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const BlogTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
  color: #000000;
  margin-bottom: 6rem;
  padding: 0px 5rem;

  & span {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #777777;
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
export const BlogCard = styled.div`
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
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  color: #0a2640;
  padding: 0.5rem 0;
  font-size: 16px;
  text-align: left;

  & span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #777777;
    padding-left: 15px;
  }
`;

export const CardInfo = styled.p`
  width: 100%;
  height: 135px;
  padding: 10px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
  text-align: initial;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem;
    height: 115px;
  }
`;

export const FooterList = styled.div`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: baseline;
  align-items: center;
  margin: 0.8rem 0;

  & span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #000000;
    padding-left: 15px;
  }
`;

export const Avater = styled.img`
  margin: 0px;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0px 2rem 0px;
`;
