import React from 'react';
import axios from 'axios';
import { Box, Stack } from '@chakra-ui/react';
import Card from './Card';

const Home = () => {

    const CheckoutHandler = async (amount) => {
        const { data: { key } } = await axios.get("http://localhost:4000/api/getApiKey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            name: "Batsy",
            description: "Tutorial of RazorPay",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSte1QoLGSn8rnbBr64NrkayQxUQHbeb2EzBrA5FTIh&s",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };

        const razor = new window.Razorpay(options)
        razor.open() //it will pop up the payment window
        console.log(order, key);
    }

    return (
        <Box>
            <Stack h={'100vh'} alignItems='center' justifyContent='center' direction={["row", "column"]}>
                <Card amount={5000} img={"https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipados14_widgets_062220_big.jpg.large.jpg"} CheckoutHandler={CheckoutHandler} />
                <Card amount={5000} img={"https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&w=1000&q=80"} CheckoutHandler={CheckoutHandler} />
            </Stack>
        </Box>
    )
}

export default Home