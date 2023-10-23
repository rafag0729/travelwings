import { Box, Flex, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from '@chakra-ui/react'

export const AddPersonsNumber = () => {
  return (
    <Flex direction="column">
      <Text 
        mr="2"
        fontSize="sm">Nro. personas</Text>
      <Box>
        <NumberInput maxW="28">
          <NumberInputField 
            defaultValue={1}/>
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Box>
    </Flex>
  )
}
