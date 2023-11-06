import React from 'react'
import { CardContent, Spacer } from 'vcc-ui'

interface CardProps {
  id: string,
  modelName: string, 
  bodyType: string,
  modelType: string,
  imageUrl: string
}

function CarCard(props: CardProps) {
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

export default Card