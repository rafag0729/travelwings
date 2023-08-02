import { Box, NumberInput, NumberInputField, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { OfferHeading } from '../shared'

export const PricingComponent = () => {

  const [value, setValue] = useState('1.53')

  const format = (val: string) => `$` + val
  const parse = (val: string) => val.replace(/^\$/, '')

  return (
    <Box mb="6">
      <OfferHeading title='COSTOS' />
      <NumberInput
        onChange={(value) => setValue(parse(value))}
        value={format(value)}
        defaultValue={0} 
        precision={2}>
        <Text>Reserva con: </Text>
        <NumberInputField />
      </NumberInput>

      <NumberInput
        onChange={(value) => setValue(parse(value))}
        value={format(value)}
        defaultValue={0} 
        precision={2}>
        <Text>Costo total: </Text>
        <NumberInputField />
      </NumberInput>

      <NumberInput
        onChange={(value) => setValue(parse(value))}
        value={format(value)}
        defaultValue={0} 
        precision={2}>
        <Text>Costo por persona: </Text>
        <NumberInputField />
      </NumberInput>
    </Box>
  )
}
