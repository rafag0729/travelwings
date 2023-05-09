import { Box, Heading, Text } from "@chakra-ui/react"
import { GetEmail } from "components";



export const Subscribe = () => {
  return (
    <Box
      flexGrow={1}
      p="6"
      display="flex"
      justifyContent="center"
      bg="brand.blue">
        <Box w="container.lg">
          <Heading
            fontSize="2xl"
            color="white"
            mb="6"
            >Suscribete a nuestras ofertas</Heading>
          <Text
              color="white"
              fontSize="md"
              mb="4"
            >Para recibir nuestras ofertas al instante en tu Correo o Whatsapp, diligencia los siguientes campos y acepta</Text>
          
          {/* <GetWhatsapp title="Recibe nuestras ofertas por Whatsapp"/> */}
          
          <GetEmail />
        </Box>
    </Box>
  )
}
