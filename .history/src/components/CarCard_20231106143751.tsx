import React from 'react'
import { Flex, Link, Row, Spacer, Text } from 'vcc-ui'
import { Car } from '../types/car.interface'
import Image from 'next/image'
import styles from '../../../'

interface CarCardProps {
  car: Car
}

function CarCard({ car }: CarCardProps) {
  return (
    <div>
      <Text variant="bates" subStyle="emphasis">{car.bodyType}</Text>
      <Flex>
        <Row>
          <Text variant="amundsen">{car.modelName}</Text>
          <Text variant="bates" subStyle="inline-link">{car.modelType}</Text>
        </Row>
      </Flex>
      <Spacer />
      <Image src={car.imageUrl} alt={car.modelName} width={200} height={150} />
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