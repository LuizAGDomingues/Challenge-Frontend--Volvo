import React from "react";
import { useCars } from "../hooks/useCars";
import { Block } from "vcc-ui";

export const HelloWorld: React.FC = () => {
  const cars = useCars;

  return (
    <Block extend={}>

    </Block>
  )
};
