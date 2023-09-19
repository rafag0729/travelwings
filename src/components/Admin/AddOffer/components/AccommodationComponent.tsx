import { Box, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { OfferHeading } from '../shared'
import { AirbnbInput } from '../shared/AirbnbInput'
import { HostelInput } from '../shared/HostelInput'
import { HotelInput } from '../shared/HotelInput'

export const AccommodationComponent = () => {

  const [radioAccommodation, setRadioAccommodation] = useState('1')

  return (
    <Box mb="6">
      <OfferHeading title='ALOJAMIENTO' />
      <RadioGroup
        colorScheme="teal"
        onChange={setRadioAccommodation} 
        value={radioAccommodation}>
        <Stack direction='column'>
          <Radio value='1'>Sin alojamiento</Radio>
          <Radio value='2'>Hotel</Radio>
          { radioAccommodation === '2' && <HotelInput />}
          <Radio value='3'>Hostal</Radio>
          { radioAccommodation === '3' && <HostelInput />}
          <Radio value='4'>AirBnB</Radio>
          { radioAccommodation === '4' && <AirbnbInput />}
        </Stack>
      </RadioGroup>
    </Box>
  )
}
