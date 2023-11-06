import React from 'react'
import { Card, CardContent, Spacer, Text } from 'vcc-ui'
import { Car } from '../types/car.interface'

interface CarCardProps {
  car: Car
}

function CarCard({ car }: CarCardProps) {
  return (
    <Card href={"/learn/" + car.id}>
      <CardContent>
        <Text variant="bates" subStyle="emphasis">{car.bodyType}</Text>
        
        <Text variant="amundsen">{car.modelName}</Text>
        <Text variant="bates" subStyle="inline-link">{car.modelType}</Text>
        <Spacer />
        <Text>This is a is a link that will take you to volvocars.com</Text>
      </CardContent>
    </Card>
  )
}

export default CarCard