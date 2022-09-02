import React from "react";
import {
  OurServicesCard,
  GridContainer,
  HeaderThree,
  TitleContent,
  FooterList,
  OurServicesTitle,
  ServiceWrapper,
  Avater,
  OurServicesButton,
  TestWrapper,
} from "./styles";
import { Button, Section } from "../../styles/GlobalComponents";
import { testimony } from "../../constants/constants";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const TestimonySections = () => (
  <ServiceWrapper>
    <Section id="blogs">
      <TestWrapper>
        <OurServicesTitle>
          An enterprise template to ramp up your company website
        </OurServicesTitle>
        <OurServicesButton>
          <Button bg={"#fff"} color={"#0a2640"}>
            <AiOutlineArrowLeft size={25} />
          </Button>
          <Button bg={"#fff"} color={"#0a2640"}>
            <AiOutlineArrowRight size={25} />
          </Button>
        </OurServicesButton>
      </TestWrapper>
      <GridContainer>
        {testimony.map(({ id, avater, title, name, description }) => (
          <OurServicesCard key={id}>
            <TitleContent>
              <HeaderThree>{description}</HeaderThree>
            </TitleContent>
            <FooterList>
              <Avater src={avater} alt={"avater"} />
              <div>
                <p>{name}</p>
                <span>{title}</span>
              </div>
            </FooterList>
          </OurServicesCard>
        ))}
      </GridContainer>
    </Section>
  </ServiceWrapper>
);

export default TestimonySections;
