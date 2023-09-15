import { Box, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { OfferHeading } from '../shared'
import { TranslationType } from './interfaces';

interface TranslationComponentProps {
  getTranslation: (id: TranslationType) => void;
}

export const TranslationComponent = ({getTranslation}: TranslationComponentProps) => {

  const [radioTransport, setRadioTransport] = useState<TranslationType>('no-translation')

  const setTranslation = (id: TranslationType) => {
    setRadioTransport(id);
    getTranslation(id);
  }

  return (
    <Box mb="6">
      <OfferHeading title='TRASLADOS' />
      <RadioGroup
        colorScheme="teal"
        onChange={setTranslation} 
        value={radioTransport}>
        <Stack direction='column'>
          <Radio value='no-translation'>Sin traslados</Radio>
          <Radio value='translation'>Traslado aeropuerto - hotel - aeropuerto</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  )
}
