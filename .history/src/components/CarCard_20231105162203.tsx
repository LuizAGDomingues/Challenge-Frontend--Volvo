import React from 'react'
import { Card, CardContent, Spacer, Text } from 'vcc-ui'
import { Car } from '../types/car.interface'

interface CarCardProps {
  car: Car
}

function CarCard({car }: CarCardProps) {
  return (
    <Card href={"/learn/" + props.id}>
      <CardContent>
        <Text subStyle="emphasis">{props.bodyType}</Text>
        <Text variant="ootah">{props.modelName}</Text>
        <Spacer />
        <Text>This is a is a link that will take you to volvocars.com</Text>
      </CardContent>
    </Card>
  )
}

export default CarCard