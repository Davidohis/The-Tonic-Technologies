import React from "react";
import { Section } from "../../../styles/GlobalComponents";
import { ServinceSectionWrapper } from "../styles";
import {
  BackgroundImage,
  SectionTwoText2,
  SectionTwoTitle,
  SectionTwoWrapper,
  LeftSection,
  Check,
} from "./styles";

function ServinceSectionTwo() {
  return (
    <ServinceSectionWrapper>
      <Section grid>
        <SectionTwoWrapper row nopadding>
          <LeftSection>
            <SectionTwoTitle main center>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </SectionTwoTitle>
            <SectionTwoText2 bg={"#0A2640"} color={"#fff"}>
              <Check src="/assets/Service/feather.png" alt={"feather"} />
              We connect our customers with the best.
            </SectionTwoText2>
            <SectionTwoText2 bg={"#ffffff"}>
              <Check src="/assets/Service/eye.png" alt={"eye"} />
              Advisor success customer launch party.
            </SectionTwoText2>
            <SectionTwoText2 bg={"#ffffff"}>
              <Check src="/assets/Service/sun.png" alt={"sun"} />
              Business-to-consumer long tail.
            </SectionTwoText2>
          </LeftSection>

          <BackgroundImage
            src="/assets/Service/section-two.png"
            width={450}
            alt={"Servinces"}
          />
        </SectionTwoWrapper>
      </Section>
    </ServinceSectionWrapper>
  );
}

export default ServinceSectionTwo;
