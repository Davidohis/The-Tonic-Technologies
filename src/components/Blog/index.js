import React from "react";
import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  TitleContent,
  Img,
  FooterList,
  Avater,
  BlogTitle,
  ButtonWrapper,
} from "./blogStyles";
import { Button, Section } from "../../styles/GlobalComponents";
import { blogs } from "../../constants/constants";

const BlogSections = () => (
  <Section id="blogs">
    <BlogTitle>
      <span>Our Blog</span>
      Value proposition accelerator product management venture
    </BlogTitle>
    <GridContainer>
      {blogs.map(({ id, image, title, description, date, name, avater }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree>
              {title} <span>{date}</span>
            </HeaderThree>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <FooterList>
            <Avater src={avater} alt={"avater"} />
            <span>{name}</span>
          </FooterList>
        </BlogCard>
      ))}
    </GridContainer>

    <ButtonWrapper>
      <Button bg={"#fff"} color={"#0a2640"}>
        Load more
      </Button>
    </ButtonWrapper>
  </Section>
);

export default BlogSections;
