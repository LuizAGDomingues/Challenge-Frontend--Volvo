import React from 'react'
import { Block } from 'vcc-ui'
import { useCars } from '../hooks/useCars'
import { Car } from '../types/car.interface'
import CarCard from './CarCard'

export const HelloWorld: React.FC = () => {
  const { cars } = useCars()

  return (
    <Block extend={{ padding: 20 }}>
      {cars.map((car: Car) => {
        return <CarCard key={car.id} car={car}></CarCard>
      })}
    </Block>
  )
}
