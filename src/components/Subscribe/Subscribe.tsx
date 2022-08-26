import { Box, Heading } from "@chakra-ui/react"
import { SubscribeWhatsapp, SubscribeEmail } from "components";



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
        
        <SubscribeWhatsapp />
        
        <SubscribeEmail />
    </Box>
  )
}
