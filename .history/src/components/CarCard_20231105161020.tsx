import React from 'react'
import { Card, CardContent, Spacer, Text } from 'vcc-ui'

interface CarCardProps {
  id: string,
  modelName: string, 
  bodyType: string,
  modelType: string,
  imageUrl: string
}

function CarCard(props: CarCardProps) {
  return (
    <Card href={"/learn/" + props.id}>
      <CardContent>
        <Text subStyle="emphasis">{props.bodyType}</Text>
        <Text variant="emphasis">{props.modelName}</Text>
        <Spacer />
        <Text>This is a is a link that will take you to volvocars.com</Text>
      </CardContent>
    </Card>
  )
}

export default CarCard