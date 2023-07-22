import { Box, Container, Heading, Input, Text } from '@chakra-ui/react'

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

      <Box>
        <Text>Destino o Destinos</Text> 
        <Text>Incluye</Text> 
        <Text>Tiquetes</Text> 
        <Text>Añadir aerolinea</Text> 
        <Text>Impuestos</Text> 
        <Text>Traslados</Text> 
        <Text>Salida desde donde</Text> 
        <Text>Alojamiento</Text> 
        <Text>Hotel</Text> 
        <Text>Habitaciones Sencilla, Doble, Cuadruple, Quintuple, Sextuple ...</Text> 
        <Text>Hostal</Text> 
        <Text>AirBnb</Text> 
        <Text>Cuantos días y cuantas noches</Text> 
        <Text>Desayuno</Text> 
        <Text>Almuerzo</Text> 
        <Text>Cena</Text> 
        <Text>O llegada a donde</Text> 
        <Text>Guía local</Text> 
        <Text>Fee bancario</Text> 
        <Text>Asistencia médica</Text> 
        <Text>Fechas</Text> 
        <Text>Fecha salida o no fecha de salida</Text> 
        <Text>Fecha llegada o no fecha de llegada</Text> 
        <Text>O fecha por temporadas</Text> 
        <Text>No incluye</Text> 
        <Text>Adicionales</Text> 
        <Text>Costo</Text> 
        <Text>Reserva</Text> 
        <Text>Imagen</Text> 
      </Box>
    </Container>
  )
}
