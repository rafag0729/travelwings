import { Button, ButtonGroup, Flex, Input, InputGroup, InputLeftAddon, InputRightAddon, Text } from '@chakra-ui/react'

export const AddBooking = () => {
  return (
    <Flex
      direction="column"
      maxW="48"
      flexGrow={0}>
      <Text fontSize="sm">Reserva por persona</Text>
      <InputGroup>
        <InputLeftAddon children="$"/>
        <Input type="number" focusBorderColor="green" />
        <InputRightAddon children="%"/>
      </InputGroup>
      <ButtonGroup
        colorScheme="teal"
        size="xs"
        isAttached>
        <Button isActive>En porcentaje</Button>
        <Button>En moneda</Button>
      </ButtonGroup>
    </Flex>
  )
}
