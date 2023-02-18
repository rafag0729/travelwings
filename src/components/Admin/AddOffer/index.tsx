import { Container, Heading, Input, Text } from '@chakra-ui/react'

export const AddOffer = () => {
  return (
    <Container mt="14" bgColor="green.100" width="100vw" >
        <Heading>Añadir oferta</Heading>
        
        <Text>Destino</Text>
        <Input placeholder='Destino'/>
        <Text>Fecha</Text>
        <Input placeholder='Fecha'/>
        <Text>Costo</Text>
        <Input placeholder='Costo'/>
        <Text>Incluye</Text>
        <Input placeholder='Incluye'/>


    </Container>
  )
}
