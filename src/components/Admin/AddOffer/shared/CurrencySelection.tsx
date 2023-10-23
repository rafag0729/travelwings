import { Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'

export const CurrencySelection = () => {
  return (
    <Flex
      mb="4"
      direction="column">
      <Text>Seleccionar moneda</Text>
      <ButtonGroup
        colorScheme="teal"
        size="xs">
        <Button>Peso colombiano</Button>
        <Button>Dolar estadounidense</Button>
        <Button>Dolar estadounidense</Button>
      </ButtonGroup>
    </Flex>
  )
}
