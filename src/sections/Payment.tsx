import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import AmexImg from '../media/payment_method/amex.png';
import VisaImg from '../media/payment_method/visa.png';
import BancolombiaImg from '../media/payment_method/bancolombia.png';
import MastercardImg from '../media/payment_method/mastercard.png';


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
            <Image src={ AmexImg } alt="Amex"/>
          </Box>
          <Box>
            <Image src={ VisaImg } alt="Visa"/>
          </Box>
          <Box>
            <Image src={ BancolombiaImg } alt="Bancolombia"/>
          </Box>
          <Box>
            <Image src={ MastercardImg } alt="Mastercard"/>
          </Box>
        </Flex>
    </Box>
  )
}
