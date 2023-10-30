import { Flex, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'

interface AddPriceProps {
  getPrice: (price: string) => void;
  label: string;
}

export const AddPrice = ({getPrice, label}: AddPriceProps) => {
  return (
    <Flex
      mr="4"
      direction="column">
      <Text fontSize="sm">{label}</Text>
      <InputGroup>
        <InputLeftAddon children="$"/>
        <Input 
          type="number"
          min={0}
          onChange={({target}) => {
            getPrice(target.value)
          }}
          focusBorderColor="green" />
      </InputGroup>
    </Flex>
  )
}
