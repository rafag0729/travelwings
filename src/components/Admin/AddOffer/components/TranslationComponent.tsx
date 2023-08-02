import { Box, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { OfferHeading } from '../shared'

export const TranslationComponent = () => {

  const [radioTransport, setRadioTransport] = useState('1')

  return (
    <Box mb="6">
      <OfferHeading title='TRASLADOS' />
      <RadioGroup
        colorScheme="teal"
        onChange={setRadioTransport} 
        value={radioTransport}>
        <Stack direction='column'>
          <Radio value='1'>Sin traslados</Radio>
          <Radio value='2'>Traslado aeropuerto - hotel - aeropuerto</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  )
}
