import { Box, Flex, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { AddBooking, AddPersonsNumber, AddPrice, AddTotal, CurrencySelection, OfferHeading, OfferSubheading } from '../shared'

export const PricingComponent = () => {
  return (
    <Box mb="6">
      <OfferHeading title='COSTOS' />
      
      <CurrencySelection />
      
      <RadioGroup colorScheme="teal">
        <Stack direction='column'>
          <Radio value='totals'>Añadir costo total</Radio>
          <Radio value='pp'>Añadir costo por persona</Radio>
        </Stack>
      </RadioGroup>

      <Flex 
        justifyContent="space-between"
        direction="row">
        <Flex>
          <AddPrice />
          <AddPersonsNumber />
        </Flex>
        <AddTotal />
      </Flex>

      <Flex direction="row" justifyContent="space-between">
        <AddBooking />
        <AddTotal />
      </Flex>
    </Box>
  )
}
