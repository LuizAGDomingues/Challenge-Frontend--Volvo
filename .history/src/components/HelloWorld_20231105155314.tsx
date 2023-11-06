import React from "react";
import { useCars } from "../hooks/useCars";

export const HelloWorld: React.FC = () => {

  const { cars } = useCars;

  return <h1>Hello World!</h1>;
};
