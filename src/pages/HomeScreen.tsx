import { Container, Flex } from "@chakra-ui/react";
import { Slider, Offers, Subscribe, Payment, Quoter } from "components";
import { CountriesContextProvider } from "context";



export const HomeScreen = () => {
  return (
    <CountriesContextProvider>
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
      </CountriesContextProvider>
  )
}
