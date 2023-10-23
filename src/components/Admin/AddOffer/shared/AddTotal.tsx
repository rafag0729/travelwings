import { Box, Flex, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'

export const AddTotal = () => {
  return (
    <Flex direction="column">
      <Text
        mr="2"
        fontSize="sm">Total viaje</Text>
      <Box>
        <InputGroup>
          <InputLeftAddon children="$"/>
          <Input type="number" focusBorderColor="green" />
        </InputGroup>
      </Box>
    </Flex>
  )
}
