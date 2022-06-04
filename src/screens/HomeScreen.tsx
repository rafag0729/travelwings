import { Container } from "@chakra-ui/react";
import { Offers } from "../sections/Offers";
import { Slider } from "../sections/Slider";
import { Subscribe } from "../sections/Subscribe";



export const HomeScreen = () => {
  return (
    <Container maxW="container.lg">
        <Slider />

        <Offers />

        <Subscribe />
    </Container>
  )
}
