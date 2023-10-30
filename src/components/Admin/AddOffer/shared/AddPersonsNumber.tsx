import { Box, Flex, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from '@chakra-ui/react'
import { useState } from 'react'

interface AddPersonsNumberProps {
  getPersonsNumber: (persons: string) => void;
  label: string;
}

export const AddPersonsNumber = ({getPersonsNumber, label}: AddPersonsNumberProps) => {

  const [personsQuantity, setPersonsQuantity] = useState('1');

  return (
    <Flex direction="column">
      <Text 
        mr="2"
        fontSize="sm">{label}</Text>
      <Box>
        <NumberInput 
          max={100}
          min={0}
          value={personsQuantity}
          onChange={(value) => {
            setPersonsQuantity(value);
            getPersonsNumber(value);
          }}
          maxW="28">
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Box>
    </Flex>
  )
}
