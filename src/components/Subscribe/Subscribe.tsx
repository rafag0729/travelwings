import { Box, Heading, Text } from "@chakra-ui/react"
import { GetWhatsapp, GetEmail } from "components";



export const Subscribe = () => {
  return (
    <Box
      flexGrow={1}
      p="6"
      bg="brand.blue">
        <Heading
          fontSize="2xl"
          color="white"
          mb="6"
          >Suscribete a nuestras ofertas</Heading>
        <Text
            color="white"
            fontSize="sm"
            mb="4"
          >Para recibir nuestras ofertas al instante en tu Correo o Whatsapp, diligencia los siguientes campos y acepta</Text>
        
        <GetWhatsapp title="Recibe nuestras ofertas por Whatsapp"/>
        
        <GetEmail title="Recibe nuestras ofertas por Correo"/>
    </Box>
  )
}
