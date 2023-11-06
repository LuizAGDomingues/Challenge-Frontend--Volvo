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
    <Card href="https://www.volvocars.com/">
      <CardContent>
        <Text variant="ootah">Card Component</Text>
        <Spacer />
        <Text>This is a is a link that will take you to volvocars.com</Text>
      </CardContent>
    </Card>
  )
}

export default CarCard