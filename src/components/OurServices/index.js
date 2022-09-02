import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  OurServicesCard,
  GridContainer,
  HeaderThree,
  TitleContent,
  Img,
  FooterList,
  OurServicesTitle,
  ServiceWrapper,
} from "./styles";
import { Section } from "../../styles/GlobalComponents";
import { services } from "../../constants/constants";
import Link from "next/link";
import ServinceSectionOne from "./SectionOne";
import ServinceSectionTwo from "./SectionTwo";

const OurServicesSections = () => (
  <React.Fragment>
    <ServiceWrapper>
      <Section id="blogs">
        <OurServicesTitle>
          <span>Our services</span>
          Handshake infographic mass market crowdfunding iteration.
        </OurServicesTitle>
        <GridContainer>
          {services.map(({ id, image, title, link }) => (
            <OurServicesCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree>{title}</HeaderThree>
              </TitleContent>
              <FooterList>
                <Link href={link}>Explore page</Link>
                <AiOutlineArrowRight color="#fff" />
              </FooterList>
            </OurServicesCard>
          ))}
        </GridContainer>
      </Section>
    </ServiceWrapper>

    {/* Our Servince Section One */}
    <ServinceSectionOne />

    {/* Our Servince Section Two */}
    <ServinceSectionTwo />
  </React.Fragment>
);

export default OurServicesSections;
