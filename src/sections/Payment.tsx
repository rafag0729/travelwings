import { Box, Heading, Text } from "@chakra-ui/react"


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
            mb="4"
            >Aceptamos todas las formas de pago para que el viaje de tus sueños sea una realidad</Text>
    </Box>
  )
}
