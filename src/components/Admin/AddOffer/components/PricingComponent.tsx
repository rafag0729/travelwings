import { Box, Flex, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useEffect, useMemo, useState } from 'react'
import { AddBooking, AddPersonsNumber, AddPrice, AddTotal, BookingOptionsType, CurrencyOptions, CurrencySelection, OfferHeading } from '../shared'
import { PricingDetailsType } from './interfaces'

interface PricingComponentProps {
  pricingDetails: PricingDetailsType;
  setPricingDetails: (details: PricingDetailsType) => void;
}

export const PricingComponent = ({pricingDetails, setPricingDetails}: PricingComponentProps) => {

  const [costSelection, setCostSelection] = useState(pricingDetails.costSelection)

  const pricingMemo = useMemo(() => {
    if ( pricingDetails.costSelection === 'pp' && pricingDetails.price && pricingDetails.personsNumber) 
      return Math.ceil(Number(pricingDetails.price) * pricingDetails.personsNumber);
    if ( pricingDetails.costSelection === 'totals' && pricingDetails.price && pricingDetails.personsNumber) 
      return Math.ceil(Number(pricingDetails.price) / pricingDetails.personsNumber);
    return 0;
  }, [pricingDetails.costSelection, pricingDetails.price, pricingDetails.personsNumber])

  const bookingMemo = useMemo(() => {
    if ( pricingDetails.costSelection === 'pp' && pricingDetails.bookingDetails.bookingValue && pricingDetails.personsNumber) 
      return Math.ceil(Number(pricingDetails.bookingDetails.bookingValue) * pricingDetails.personsNumber);
    if ( pricingDetails.costSelection === 'totals' && pricingDetails.bookingDetails.bookingValue && pricingDetails.personsNumber) 
      return Math.ceil(Number(pricingDetails.bookingDetails.bookingValue) / pricingDetails.personsNumber);
    return 0;
  }, [pricingDetails.costSelection, pricingDetails.bookingDetails.bookingValue, pricingDetails.personsNumber])

  const handleCurrencyAdded = (currency: CurrencyOptions) => {
    setPricingDetails({
      ...pricingDetails,
      currency: currency
    })
  };

  const handleCostSelection = (cost: string) => {
    setCostSelection(cost);
    setPricingDetails({
      ...pricingDetails,
      costSelection: cost,
    });
  }

  const handlePriceAdded = (price: string) => {
    setPricingDetails({
      ...pricingDetails,
      price: price
    })
  };
  
  const handlePersonsAdded = (persons: string) => {
    setPricingDetails({
      ...pricingDetails,
      personsNumber: Number(persons),
    })

  };

  const handleBookingDetailsAdded = (booking: {
    type: BookingOptionsType;
    bookingValue: string;
  }) => {
    setPricingDetails({
      ...pricingDetails,
      bookingDetails: booking
    })
  };

  useEffect(() => {
    console.log(pricingDetails.bookingDetails)
  }, [pricingDetails.bookingDetails])
  
  
  return (
    <Box mb="6">
      <OfferHeading title='COSTOS' />
      
      <CurrencySelection 
        getCurrencySelected={(currency) => handleCurrencyAdded(currency)}
      />
      
      <RadioGroup 
        colorScheme="teal" 
        mb="4"
        value={costSelection}
        onChange={(costOption) => handleCostSelection(costOption)}>
        <Stack direction='column'>
          <Radio value='totals'>Añadir costo total</Radio>
          <Radio value='pp'>Añadir costo por persona</Radio>
        </Stack>
      </RadioGroup>

      <Flex
        mb="4"
        justifyContent="space-between"
        direction="row">
        <Flex>
          <AddPrice 
            label={costSelection === 'totals' ? 'Costo total del viaje' : 'Costo por persona'}
            getPrice={(price) => handlePriceAdded(price)}
          />
          <AddPersonsNumber
            label={costSelection === 'totals' ? 'Entre cuantas personas' : 'Nro. personas'}
            getPersonsNumber={(persons) => handlePersonsAdded(persons)}
          />
        </Flex>
        <AddTotal 
          label={costSelection === 'totals' ? 'Costo por persona' : 'Total viaje'}
          costAmount={pricingMemo.toString()}
        />
      </Flex>

      <Flex direction="row" justifyContent="space-between">
        <AddBooking 
          type={costSelection === 'totals' ? 'totals' : 'pp'}
          getBookingDetails={(booking) => handleBookingDetailsAdded(booking)}
        />
        { pricingDetails.bookingDetails.type === 'currency' && (
          <AddTotal
            label={costSelection === 'totals' ? 'Costo reserva por persona' : 'Total reserva'}
            costAmount={bookingMemo.toString()}
          />
        )}
      </Flex>
    </Box>
  )
}
