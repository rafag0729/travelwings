import { Button, Input, Text } from '@chakra-ui/react';


export const LoginBox = () => {
  return (
    <>
      <Text
        mt="8"
        >Usuario</Text>
    <Input
        bg="white"
        maxW="72"/>

    <Text
      mt="8"
      >Contraseña</Text>
    <Input
        bg="white"
        maxW="72"/>

    <Button display="block">Acceder</Button>
  </>
  )
}
