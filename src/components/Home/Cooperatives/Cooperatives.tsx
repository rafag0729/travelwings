import { Box, Button, Heading, Text } from '@chakra-ui/react'

interface CooperativeProps {
  action: () => void;
}

export const Cooperatives = ({action}: CooperativeProps) => {
  return (
    <Box
      p="6"
      flex={1}
      bgColor="red.500"
      >
      <Heading
        color="blackAlpha.800"  
        fontSize="2xl"
        mb="6"
        textAlign="right"
        textColor="white"
        >¿Eres parte de una cooperativa?</Heading>
      <Text
        fontSize="md"
        color="blackAlpha.800"
        textAlign="right"
        textColor="white"
        >Si eres parte de una cooperativa, podemos hacer uso de la misma para cumplir el viaje de tus sueños realidad con un descuento adicional
      </Text>
      <Box
        display="flex"
        justifyContent="center"
        mt="8"
      >
        <Button
          onClick={action}
          color="red.500"
        >Contactanos</Button>
      </Box>
    </Box>
  )
}
