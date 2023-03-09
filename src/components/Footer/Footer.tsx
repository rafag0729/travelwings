import { Container, Flex, Heading, Text } from "@chakra-ui/react";


export const Footer = () => {
  return (
    <Container maxW="full" bgGradient="linear(to-r, brand.red, brand.blue)"> 
      <Container p="6" maxW="container.lg">
        <Heading color="white" fontSize="2xl" mb="6" textAlign={['center', 'left']}>
          Contactanos
        </Heading>

        <Flex mb="6" flexDirection="column">
          <Text fontSize="sm" color="white" textAlign={['center', 'left']}>Pereira, Risaralda, Colombia</Text>
          <Text fontSize="sm" color="white" textAlign={['center', 'left']}>301 593 8074</Text>
          <Text fontSize="sm" color="white" textAlign={['center', 'left']}>travelwingsagencia@gmail.com</Text>
        </Flex> 

        <Flex direction={['column', 'row']} justifyContent="space-between" alignItems={['center']}>
          <Text fontSize="xs" color="white">Política de privacidad</Text>
          <Text fontSize="xs" color="white">Terminos de servicio</Text>
          <Text fontSize="xs" color="white" mb={['4']}>Política de cookies</Text>
          <Text fontSize="xs" color="white" textAlign="center">© 2022. Travel Wings S.A.S. Todos los derechos reservados</Text>
        </Flex>
      </Container>
    </Container>
  )
}
