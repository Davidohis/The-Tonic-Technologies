import React from "react";
import { Button } from "../../styles/GlobalComponents";
import {
  HeroBackgroundImage,
  HeroSectionText2,
  HeroSectionTitle,
  HeroSectionWrapper,
  LeftSection,
  HeroSections,
} from "./HeroStyles";

function HeroSection() {
  return (
    <HeroSections grid>
      <HeroSectionWrapper row nopadding>
        <LeftSection>
          <HeroSectionTitle main center>
            Save time by building fast with Boldo Template
          </HeroSectionTitle>
          <HeroSectionText2>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </HeroSectionText2>

          <Button bg={"#0a2640"} color={"#fff"}>
            Buy template
          </Button>
          <Button bg={"#fff"} color={"#0a2640"} px={"2rem"}>
            Explore
          </Button>
        </LeftSection>

        <HeroBackgroundImage
          src="/assets/HeroGraphics.png"
          width={450}
          height={400}
          alt={"personal"}
        />
      </HeroSectionWrapper>
    </HeroSections>
  );
}

export default HeroSection;
