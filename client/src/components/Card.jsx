import React from 'react'
import { Button, Image, Text, VStack } from '@chakra-ui/react'

const Card = ({ amount, img, CheckoutHandler }) => {
    return (
        <VStack>
            <Image src={img} boxSize={'64'} objectFit={'cover'} alt='tab' />
            <Text>
                ${amount}
            </Text>
            <Button onClick={()=>CheckoutHandler(amount)}>Buy Now</Button>

        </VStack>
    )
}

export default Card