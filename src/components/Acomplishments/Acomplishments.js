import React from "react";
import { acomplishments } from "../../constants/constants";
import { AcomplishmentWrapper, Boxes } from "./AcomplishmentsStyles";

const Acomplishments = () => (
  <AcomplishmentWrapper
    smPadding="50px 10px"
    position="relative"
    inverse
    id="complishments"
  >
    <Boxes>
      {acomplishments.map((item, index) => (
        <img
          key={index}
          src={item.image}
          width={100}
          height={70}
          alt={"logo"}
        />
      ))}
    </Boxes>
  </AcomplishmentWrapper>
);

export default Acomplishments;
