import React from "react";
import { useCars } from "../hooks/useCars";
import { Block } from "vcc-ui";
import CarCard from "./CarCard";

export const HelloWorld: React.FC = () => {
  const { cars } = useCars;

  return (
    <Block extend={{ padding: 20 }}>
      {cars.map(car => return(
        <CarCard></CarCard>
      ))}
    </Block>
  )
};
