import React from "react";
import { Block } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import CarCard from "./CarCard";

export const HelloWorld: React.FC = () => {
  const { cars } = useCars();

  return (
    <Block extend={{ padding: 20 }}>
      {cars.map((car: Car) => {
        return(
          <CarCard 
            key={car.id}
            id={car.id} 
            modelName={car.modelName} 
            bodyType={car.bodyType} 
            modelType={car.modelType} 
            imageUrl={car.imageUrl}
          ></CarCard>
        )
      })}
    </Block>
  )
};
