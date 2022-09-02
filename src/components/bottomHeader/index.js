import React from "react";
import { Section } from "../../styles/GlobalComponents";
import {
  BackgroundImage,
  BottomHeaderContainer,
  BottomHeaderWrapper,
  Form,
  FormInput,
  FormWrapper,
  InputButton,
} from "./bottomHeaderStyle";

export default function BottomHeaderComponent() {
  return (
    <Section
      smPadding="50px 10px"
      position="relative"
      inverse
      id="BottomHeader"
    >
      <BottomHeaderContainer>
        <BottomHeaderWrapper>
          <BackgroundImage />
          <h1>An enterprise template to ramp up your company website</h1>

          <FormWrapper>
            <Form target="#">
              <FormInput
                type="email"
                id="email-signup"
                placeholder="Your email address"
                required
              />
              <InputButton type="submit" value="Start now" id="btn" />
            </Form>
          </FormWrapper>
        </BottomHeaderWrapper>
      </BottomHeaderContainer>
    </Section>
  );
}
