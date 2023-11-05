import axios from "axios";
import { useEffect } from "react";

export function useCars(){
  useEffect(() => {
    axios.get("http://localhost:3000/api/cars").then()
  })
}