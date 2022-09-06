import { Box, FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';



interface Props {
  label: string;
}

export const GetQuantity = ({label}: Props) => {
  return (
    <Box 
      flex="0 1 150px"
      mx="1"
    >
      <FormControl 
        mr="4"
        mb="4">
          <FormLabel
            fontSize="sm"
            fontWeight="bold">{ label }</FormLabel>
          <NumberInput 
            size="sm"
            defaultValue={2}
            max={20}
            min={1}
          >
            <NumberInputField 
              bgColor="white"
              color="blackAlpha.700"
            />

            <NumberInputStepper bg="green.600">
              <NumberIncrementStepper/>
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
      </FormControl>
    </Box>
  )
}
