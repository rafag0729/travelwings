import { Box, Flex, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { AddRoom, BaseInputText, CalendarInput, HotelStarSelect, OfferHeading, TagItem } from '../shared'

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
          { radioAccommodation === '2' && (
            <>
              <BaseInputText />
              <HotelStarSelect />
              <CalendarInput type='inicio' />
              <CalendarInput type='salida' />
              <AddRoom />
              <Flex>
                <TagItem item="1xDoble" />
                <TagItem item="1xTriple" />
              </Flex>
            </>
          )}
          <Radio value='3'>Hostal</Radio>
          { radioAccommodation === '3' && (
            <>
              <BaseInputText />
              <CalendarInput type='inicio' />
              <CalendarInput type='salida' />
            </>
          )}
          <Radio value='4'>AirBnB</Radio>
          { radioAccommodation === '4' && (
            <>
              <CalendarInput type='inicio' />
              <CalendarInput type='salida' />
            </>
          )}
        </Stack>
      </RadioGroup>
    </Box>
  )
}
