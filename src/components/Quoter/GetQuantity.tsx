import { Box, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';



export const GetQuantity = () => {
  return (
    <Box flexBasis="0 2 50px">
      <FormControl 
        mr="4"
        mb="4">
          <FormLabel
            fontSize="sm"
            fontWeight="bold">Número personas</FormLabel>
          <NumberInput 
            size="sm"
            defaultValue={2}
            max={10}
            min={1}
          >
            <NumberInputField 
              bgColor="white"
              color="blackAlpha.700"
            />

            <NumberInputStepper
              bg="green.800"
            >
              <NumberIncrementStepper/>
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
      </FormControl>
    </Box>
  )
}
