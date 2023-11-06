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
    <div>Card</div>
  )
}

export default Card