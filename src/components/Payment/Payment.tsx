import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { amex, visa, bancolombia, mastercard } from 'media';


export const Payment = () => {
  return (
    <Box
        p="6"
        bgColor="white"
        flexGrow={1}>
        <Heading
            fontSize="2xl"
            color="blackAlpha.800"
            mb="6"
            >Recibimos todas las formas de pago</Heading>
        <Text
            fontSize="sm"
            color="blackAlpha.800"
            mb="8"
            >Aceptamos todas las formas de pago para que el viaje de tus sueños sea una realidad</Text>

        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Box>
            <Image src={ amex } alt="Amex"/>
          </Box>
          <Box>
            <Image src={ visa } alt="Visa"/>
          </Box>
          <Box>
            <Image src={ bancolombia } alt="Bancolombia"/>
          </Box>
          <Box>
            <Image src={ mastercard } alt="Mastercard"/>
          </Box>
        </Flex>
    </Box>
  )
}
