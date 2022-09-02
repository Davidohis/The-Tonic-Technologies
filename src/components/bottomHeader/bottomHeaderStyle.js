import styled from "styled-components";

export const BottomHeaderContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
  margin-top: 5rem;
  margin-bottom: 10rem;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
    margin-bottom: 3rem;
  }
`;

export const BottomHeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: #0a2640;
  border-radius: 12px;
  opacity: 0.94;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.11);
  text-align: center;
  padding: 4rem 1rem;

  & > h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 55px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    padding: 0px 15rem;
    z-index: -1;
  }

  @media screen and (max-width: 960px) {
    height: auto;
    padding: 4rem 3rem;

    & > h1 {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      padding: 0px 0rem;
      z-index: -1;
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
export const Form = styled.form`
  display: block;
`;

export const FormInput = styled.input`
  height: 60px;
  padding: 0px 5px 0px 30px;
  width: 400px;
  background-color: white;
  font-size: 20px;
  color: #000000;
  outline-style: none;
  border: none;
  border-radius: 0.2rem;
  margin-right: 20px;
  border-radius: 30px;

  :focus {
    background-color: #f2f2f2;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 300px;
    margin-right: 10px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    border-radius: 0px;
  }
`;

export const InputButton = styled.input`
  height: 60px;
  width: 200px;
  background-color: #65e4a3;
  border: none;
  font-size: 18px;
  font-weight: 700;
  border-radius: 0.2rem;
  float: right;
  color: #0a2640;
  border-radius: 30px;
  cursor: pointer;

  :hover {
    background-color: #1c3d5b;
    color: #ffffff;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 150px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    border-radius: 0px;
  }
`;

export const BackgroundImage = styled.div`
  clip-path: circle(35% at 100% 0);
  width: 99.1%;
  height: 400px;
  position: absolute;
  top: 0;
  background: #1c3d5b;
  opacity: 1;
  padding: 0px;
  border-radius: 12px;
  z-index: -1;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
  }
`;
