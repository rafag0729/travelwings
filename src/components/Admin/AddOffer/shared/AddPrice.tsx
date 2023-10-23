import { Flex, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'

export const AddPrice = () => {
  return (
    <Flex
      mr="4"
      direction="column">
      <Text fontSize="sm">Costo por persona</Text>
      <InputGroup>
        <InputLeftAddon children="$"/>
        <Input type="number" focusBorderColor="green" />
      </InputGroup>
    </Flex>
  )
}
