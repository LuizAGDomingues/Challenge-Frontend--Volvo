import React from 'react'

interface CardProps {
  id: string,
  modelName: string, 
  bodyType: string,
  modelType: string,
  imageUrl: string
}

function Card(props: CardProps) {
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