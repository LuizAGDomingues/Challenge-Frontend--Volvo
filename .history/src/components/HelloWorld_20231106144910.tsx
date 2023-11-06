import React from 'react'
import { Flex } from 'vcc-ui'
import { useCars } from '../hooks/useCars'
import { Car } from '../types/car.interface'
import CarCard from './CarCard'

export const HelloWorld: React.FC = () => {
  const { cars } = useCars()

  return (
    <Flex extend={{ padding: 20 }}>
      {cars.map((car: Car) => {
        return <CarCard key={car.id} car={car}></CarCard>
      })}
    </Flex>
  )
}
