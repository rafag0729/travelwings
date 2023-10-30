import { Box, Flex, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import { currencyMoneyDots } from 'utils/formats';

interface AddTotalProps {
  label: string;
  costAmount: string;
}

export const AddTotal = ({label, costAmount}: AddTotalProps) => {
  return (
    <Flex direction="column">
      <Text
        mr="2"
        fontSize="sm">{label}</Text>
      <Box>
        <InputGroup>
          <InputLeftAddon children="$"/>
          <Input 
            value={currencyMoneyDots(costAmount)}
            disabled
            isReadOnly
            focusBorderColor="green" />
        </InputGroup>
      </Box>
    </Flex>
  )
}
