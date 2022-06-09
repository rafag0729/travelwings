import { Container, Flex } from "@chakra-ui/react";
import { Offers } from "../sections/Offers";
import { Payment } from "../sections/Payment";
import { Quoter } from "../sections/Quoter";
import { Slider } from "../sections/Slider";
import { Subscribe } from "../sections/Subscribe";



export const HomeScreen = () => {
  return (
    <Container maxW="container.lg">
        <Slider />
        <Offers />

        <Flex
          justifyContent="space-between"
          flexDirection="row"
          p="0">
          <Subscribe />
          <Payment />
        </Flex>

        <Quoter />
    </Container>
  )
}
