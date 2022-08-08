import { Container, Flex, Heading, Text } from "@chakra-ui/react";


export const Footer = () => {
  return (
    <Container maxW="full" bgGradient="linear(to-r, brand.red, brand.blue)"> 
      <Container p="6" maxW="container.lg">
        <Heading color="white" fontSize="2xl" mb="6">
          Contactanos
        </Heading>

        <Flex mb="6" flexDirection="column">
          <Text fontSize="sm" color="white">Pereira, Risaralda, Colombia</Text>
          <Text fontSize="sm" color="white">304 524 5250</Text>
          <Text fontSize="sm" color="white">rafaga_729@hotmail.com</Text>
        </Flex> 

        <Flex direction="row" justifyContent="space-between">
          <Text fontSize="xs" color="white">Política de privacidad</Text>
          <Text fontSize="xs" color="white">Terminos de servicio</Text>
          <Text fontSize="xs" color="white">Política de cookies</Text>
          <Text fontSize="xs" color="white">© 2022. Travel Wings S.A.S. Todos los derechos reservados</Text>
        </Flex>
      </Container>
    </Container>
  )
}
