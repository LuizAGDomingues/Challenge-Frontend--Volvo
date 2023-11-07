import React from 'react'
import { Text } from 'vcc-ui'
import styles from '../../public/css/home.module.css'
import { useCars } from '../hooks/useCars'
import { Car } from '../types/car.interface'
import CarCard from './CarCard'
import PaginationDesktop from './PaginationDesktop'
import Spacer from './Spacer'

export const Home: React.FC = () => {
  const { cars } = useCars()

  const onClickLeft = () => {
    const cardList = document.getElementById('card-list')
    const card = document.firstElementChild
    const cardSize = card?.clientWidth
    const scrollSize = cardList?.scrollWidth
    const scrollPosition = cardList?.scrollLeft

    if(scrollPosition > scrollSize)
  }
  const onClickRight = () => {}

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>
      <Spacer />
      <div className={styles.cardsWrapper} id="card-list">
        {cars.map((car: Car) => {
          return <CarCard key={car.id} car={car}></CarCard>
        })}
      </div>
      <PaginationDesktop
        onClickLeft={onClickLeft}
        onClickRight={onClickRight}
      />
    </div>
  )
}
