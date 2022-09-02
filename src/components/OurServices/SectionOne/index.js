import React from "react";
import { Button, Section } from "../../../styles/GlobalComponents";
import { ServinceSectionWrapper } from "../styles";
import {
  BackgroundImage,
  SectionOneText2,
  SectionOneTitle,
  SectionOneWrapper,
  LeftSection,
  Check,
} from "./styles";

function ServinceSectionOne() {
  return (
    <ServinceSectionWrapper>
      <Section grid>
        <SectionOneWrapper row nopadding>
          <BackgroundImage
            src="/assets/Service/section-one.png"
            width={450}
            alt={"Servinces"}
          />
          <LeftSection>
            <SectionOneTitle main center>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </SectionOneTitle>
            <SectionOneText2>
              <Check src="/assets/Service/check.png" alt={"check"} />
              We connect our customers with the best.
            </SectionOneText2>
            <SectionOneText2>
              <Check src="/assets/Service/check.png" alt={"check"} />
              Advisor success customer launch party.
            </SectionOneText2>
            <SectionOneText2>
              <Check src="/assets/Service/check.png" alt={"check"} />
              Business-to-consumer long tail.
            </SectionOneText2>

            <Button bg={"#0a2640"} color={"#fff"}>
              Start now
            </Button>
          </LeftSection>
        </SectionOneWrapper>
      </Section>
    </ServinceSectionWrapper>
  );
}

export default ServinceSectionOne;
