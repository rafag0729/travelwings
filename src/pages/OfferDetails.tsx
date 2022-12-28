import { Checkbox, CheckboxGroup, Container, Image, Input, Text } from '@chakra-ui/react'


export const OfferDetails = () => {
  return (
    <Container maxW="full" mt="10">
      <Container maxW="container.lg" pt="2" minH="2xl" bg="white">
        <Text>Oferta 1</Text>
        <Text>Número identificador de la oferta</Text>

        <Text>Destino</Text>
        <Input value="Santa Marta"/>

        <Text>Imagen</Text>
        <Image src='https://res.cloudinary.com/duljg8kl5/image/upload/v1656984517/travel-wings/santa_marta_oiswtz.png'/> 

        <Text>Acomodación</Text>
        <Input value="Triple"/>

        <Text>Fechas</Text>
        <Input value="Julio 6 - Julio 20"/>

        <Text>Precio</Text>
        <Input value="200000"/>

        <Text>Incluido en el paquete</Text>
        <CheckboxGroup>
          <Checkbox checked={true}>Vuelo ida y vuelta</Checkbox>
          <Checkbox checked={true}>Alimentación</Checkbox>
          <Checkbox checked={true}>Hospedaje</Checkbox>
          <Checkbox checked={true}>Tours</Checkbox>
        </CheckboxGroup>
        
      </Container>
    </Container>
  )
}