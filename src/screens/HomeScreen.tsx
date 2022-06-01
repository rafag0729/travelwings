import { Container, GridItem, SimpleGrid } from "@chakra-ui/react"

import { Offers } from "../sections/Offers"
import { Slider } from "../sections/Slider"
import { Subscribe } from "../sections/Subscribe"



export const HomeScreen = () => {
  return (
    <Container maxW="container.lg" bg="blue.400">
        <SimpleGrid column={2} spacing={2} bg="yellow.200">
            <GridItem colSpan={2}>
                <Slider />
            </GridItem>
            <GridItem colSpan={1}>
                <Offers />
            </GridItem>
            <GridItem colSpan={1}>
                <Subscribe />
            </GridItem>
        </SimpleGrid>
    </Container>
  )
}
