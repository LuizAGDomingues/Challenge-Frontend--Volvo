import React from 'react'
import styles from '../../public/css/home.module.css'
import { useCars } from '../hooks/useCars'
import { Car } from '../types/car.interface'
import CarCard from './CarCard'

export const HelloWorld: React.FC = () => {
  const { cars } = useCars()

  return (
    <div className={styles.homeWrapper}>
      <Text
      <div className={styles.cardsWrapper}>
        {cars.map((car: Car) => {
          return <CarCard key={car.id} car={car}></CarCard>
        })}
      </div>
    </div>
  )
}
