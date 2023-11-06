import React from 'react'
import { Flex, Link, Row, Spacer, Text } from 'vcc-ui'
import { Car } from '../types/car.interface'
import Image from 'next/image'
import styles from '../../public/css/CarCard.module.css'

interface CarCardProps {
  car: Car
}

function CarCard({ car }: CarCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <Text variant="bates" subStyle="emphasis">{car.bodyType}</Text>
      <Flex>
        <Text variant="amundsen">{car.modelName}</Text>
        <Text variant="bates" subStyle="inline-link">{car.modelType}</Text>
      </Flex>
      <Spacer />
      <Image src={car.imageUrl} alt={car.modelName} width={250} height={200} />
      <Spacer />
      <Flex extend={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      }}>
        <Link href='https://www.volvocars.com/' arrow="right">
          SHOP
        </Link>
        <Link href='https://www.volvocars.com/' arrow="right">
          LEARN
        </Link>
      </Flex>
    </div>
  )
}

export default CarCard