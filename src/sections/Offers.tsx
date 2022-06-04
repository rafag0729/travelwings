import { Box, Container, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { FeedingIcon } from "../media/FeedingIcon";
import { HotelIcon } from "../media/HotelIcon";
import { PlaneIcon } from "../media/PlaneIcon";
import { ToursIcon } from "../media/ToursIcon";



export const Offers = () => {
  return (
    <Container
      mx="0"
      mb="20"> 
      <Heading
        mb="4"
        fontSize="2xl"
        color="brand.red"
        >Nuestras últimas ofertas</Heading>

      <HStack
        spacing="3.5">
        <Box
          p="4"
          maxW="min"
          borderRadius="lg"
          boxShadow="lg"
          bgColor="white"
          >
          <Text 
            color="brand.red"
            fontWeight="700"
            fontSize="sm"
            >Santa Marta</Text>
          <Image alt="Santa Marta"/>
          <Text
            color="blackAlpha.800"
            fontSize="sm"
            fontWeight="400"
            >Desde <Text as="em" fontWeight="700">$627.000</Text> por persona en acomodación cuadruple</Text>
          <Text
            color="blackAlpha.800"
            fontSize="sm"
            fontWeight="700"
            >Incluye:</Text>

          <HStack>
            <PlaneIcon />
            <HotelIcon />
            <FeedingIcon />
            <ToursIcon />
          </HStack>
        </Box>

      </HStack>
    </Container>
  )
}
