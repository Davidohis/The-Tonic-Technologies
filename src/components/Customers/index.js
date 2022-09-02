import React from "react";
import { Section } from "../../styles/GlobalComponents";
import {
  Icon,
  CustomersSectionFlex,
  CustomersText,
  CustomersText2,
  CustomersWrapper,
  BackgroundImage,
  CustomersSectionWrapper,
} from "./styles";

function CustomersSection() {
  return (
    <CustomersSectionWrapper>
      <BackgroundImage src="/assets/image.png" alt={"feather"} />
      <Section nopadding grid>
        <CustomersWrapper row nopadding>
          <CustomersSectionFlex>
            <CustomersText main>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </CustomersText>
          </CustomersSectionFlex>

          <CustomersSectionFlex>
            <CustomersText2>
              We connect our customers with the best.
              <Icon src="/assets/icon.png" alt={"feather"} />
            </CustomersText2>

            <CustomersText2>
              Advisor success customer launch party.
              <Icon src="/assets/icon.png" alt={"eye"} />
            </CustomersText2>
          </CustomersSectionFlex>
        </CustomersWrapper>
      </Section>
    </CustomersSectionWrapper>
  );
}

export default CustomersSection;
