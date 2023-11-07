import React from 'react'
import { Text } from 'vcc-ui'
import styles from '../../public/css/home.module.css'
import { useCars } from '../hooks/useCars'
import { Car } from '../types/car.interface'
import CarCard from './CarCard'
import Spacer from './Spacer'
import PaginationDesktop from './PaginationDesktop'

export const Home: React.FC = () => {
  const { cars } = useCars()

  const onClickLeft

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>
      <Spacer />
      <div className={styles.cardsWrapper}>
        {cars.map((car: Car) => {
          return <CarCard key={car.id} car={car}></CarCard>
        })}
      </div>
      <PaginationDesktop onClickLeft={} onClickRight={} />
    </div>
  )
}
