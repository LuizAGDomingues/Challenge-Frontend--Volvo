import React from 'react'
import { Flex } from 'vcc-ui'
import { useCars } from '../hooks/useCars'
import { Car } from '../types/car.interface'
import CarCard from './CarCard'

import styles from '../../public/css/'

export const HelloWorld: React.FC = () => {
  const { cars } = useCars()

  return (
    <Flex
      extend={{
        flexDirection: 'row',
        overflow: 'hidden',
        maxWidth: '80%',
        width: '100%',
      }}
    >
      {cars.map((car: Car) => {
        return <CarCard key={car.id} car={car}></CarCard>
      })}
    </Flex>
  )
}
