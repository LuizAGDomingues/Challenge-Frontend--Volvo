import React from "react";
import { Block } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import CarCard from "./CarCard";
import { Car } from "../types/car.interface";

export const HelloWorld: React.FC = () => {
  const { cars } = useCars();

  return (
    <Block extend={{ padding: 20 }}>
      {cars.map((car: Car) => {
        return(
          <CarCard 
            key={car.id}
            car={}
          ></CarCard>
        )
      })}
    </Block>
  )
};
