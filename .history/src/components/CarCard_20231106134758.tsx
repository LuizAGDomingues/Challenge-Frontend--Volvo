import React from 'react'
import { Card, CardContent, Flex, Link, Row, Spacer, Text } from 'vcc-ui'
import { Car } from '../types/car.interface'
import Image from 'next/image'

interface CarCardProps {
  car: Car
}

function CarCard({ car }: CarCardProps) {
  return (
    <Card href={"/learn/" + car.id}>
      <CardContent>
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
        <Link>
        
      </CardContent>
    </Card>
  )
}

export default CarCard