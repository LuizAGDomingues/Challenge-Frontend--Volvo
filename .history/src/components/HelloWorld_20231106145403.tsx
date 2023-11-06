import React from 'react'
import { useCars } from '../hooks/useCars'
import { Car } from '../types/car.interface'
import CarCard from './CarCard'

import styles from '../../public/css/home.module.css'

export const HelloWorld: React.FC = () => {
  const { cars } = useCars()

  return (
    <div>
      {cars.map((car: Car) => {
        return <CarCard key={car.id} car={car}></CarCard>
      })}
    </div>
  )
}
