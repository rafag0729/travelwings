import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react'
import { LoginBox } from 'components/LoginBox/LoginBox'


export const AdminTW = () => {
  return (
    <Container maxW="full">
      <Container maxW="container.lg" mt="16" minH="2xl">
        <Text
          mt="10"
          color="brand.red"
          fontWeight="bold"
          fontSize="2xl">
            Página de administración TW</Text>

          {/* <LoginBox />      */}

          <Text>Administrador de ofertas</Text>
          <Text>Administrador de cotizaciones</Text>

      </Container>
    </Container>
  )
}
