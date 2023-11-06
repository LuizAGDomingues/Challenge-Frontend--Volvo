import Image from 'next/image'
import { Flex, Link, Spacer, Text } from 'vcc-ui'
import styles from '../../public/css/carCard.module.css'
import { Car } from '../types/car.interface'

interface CarCardProps {
  car: Car
}

function CarCard({ car }: CarCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <Text variant="bates" subStyle="emphasis">
        {car.bodyType}
      </Text>
      <Flex
        extend={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
          margin: 0,
        }}
      >
        <Text variant="amundsen">{car.modelName}</Text>
        <Text variant="bates" subStyle="inline-link">
          {car.modelType}
        </Text>
      </Flex>
      <Spacer />
      <Image src={car.imageUrl} alt={car.modelName} width={250} height={200} />
      <Spacer />
      <Flex
        extend={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Link href="https://www.volvocars.com/" arrow="right">
          SHOP
        </Link>
        <Link href="https://www.volvocars.com/" arrow="right">
          LEARN
        </Link>
      </Flex>
    </div>
  )
}

export default CarCard
