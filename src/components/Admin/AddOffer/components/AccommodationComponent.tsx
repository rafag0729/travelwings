import { Box, Button, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { OfferHeading } from '../shared'
import { HotelInput } from '../shared/HotelInput'
import { AccomodationType, AccomodationTypeAndDetails, HotelDetailsProps, HOTEL_DETAILS } from './interfaces'

interface AccomodationComponentProps {
  getAccomodationValues: (value: AccomodationTypeAndDetails) => void;
}

export const AccommodationComponent = ({getAccomodationValues}: AccomodationComponentProps) => {

  const [radioAccommodation, setRadioAccommodation] = useState<AccomodationType>('no-accomodation')
  const [expandDetails, setExpandDetails] = useState(false);
  
  const handleAccomodationChange = (value: AccomodationType) => {
    setRadioAccommodation(value);
    getAccomodationValues({
      type: value,
      details: HOTEL_DETAILS,
    });
  }

  const handleHotelInputDetails = (newHotelDetails: HotelDetailsProps) => {
    getAccomodationValues({
      type: radioAccommodation,
      details: newHotelDetails,
    });
  }

  return (
    <Box mb="6">
      <OfferHeading title='ALOJAMIENTO' />
      <Button
        onClick={() => setExpandDetails((prev) => !prev)}
        size="xs"
        variant="outline"
        colorScheme="teal">
        { !expandDetails ? 'Expandir' : 'Esconder'} detalles de alojamiento
      </Button>
      <RadioGroup
        mt="4"
        colorScheme="teal"
        onChange={handleAccomodationChange} 
        value={radioAccommodation}>
        <Stack direction='column'>
          <Radio value='no-accomodation'>Sin alojamiento</Radio>
          <Radio value='hotel'>Hotel</Radio>
          { radioAccommodation === 'hotel' && expandDetails && (
            <HotelInput 
              hotelType='hotel'
              getHotelInputDetails={(details) => handleHotelInputDetails(details)}/>
          )}
          <Radio value='hostel'>Hostal</Radio>
          { radioAccommodation === 'hostel' && expandDetails && (
            <HotelInput 
              hotelType='hostel'
              getHotelInputDetails={(details) => handleHotelInputDetails(details)}/>
          )}
          <Radio value='airbnb'>AirBnB</Radio>
          { radioAccommodation === 'airbnb' && expandDetails && (
            <HotelInput 
              hotelType='airbnb'
              getHotelInputDetails={(details) => handleHotelInputDetails(details)}/>
          )}
        </Stack>
      </RadioGroup>
    </Box>
  )
}
