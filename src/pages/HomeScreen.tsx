import { Container, Flex } from "@chakra-ui/react";
import { Offers } from "../components/Offers";
import { Payment } from "../components/Payment";
import { Quoter } from "../components/Quoter";
import { Slider } from "../components/Slider";
import { Subscribe } from "../components/Subscribe";



export const HomeScreen = () => {
  return (
    <>
      <Slider />
      <Container maxW="container.lg">
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
    </>
  )
}
