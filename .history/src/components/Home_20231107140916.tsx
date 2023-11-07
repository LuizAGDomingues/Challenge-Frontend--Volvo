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

  const onClickNavigate = (left: boolean) => {
    const cardList = document.getElementById('card-list')
    const card = cardList?.firstElementChild
    const cardSize = (card?.clientWidth ?? 0) + 24
    const scrollSize = cardList?.scrollWidth ?? 0
    const scrollPosition = cardList?.scrollLeft ?? 0

    if(left) cardList?.scrollTo({left: scrollPosition - cardSize})
    else cardList.sco
  }

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
