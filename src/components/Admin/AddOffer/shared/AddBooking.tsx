import { Button, ButtonGroup, Flex, Input, InputGroup, InputLeftAddon, InputRightAddon, Text } from '@chakra-ui/react'
import { useState } from 'react'

interface AddBookingProps {
  getBookingDetails: ({}: {
    type: BookingOptionsType,
    bookingValue: string,
  }) => void;
}

export const AddBooking = ({getBookingDetails}: AddBookingProps) => {

  const [bookingSelection, setBookingSelection] = useState<BookingOptionsType>(enumBookingOptions.PERCENTAGE)

  const [inputValue, setInputValue] = useState('');

  const handleBookingSelection = (type: BookingOptionsType) => {
    setBookingSelection(type)
    setInputValue('0');
  }

  return (
    <Flex
      direction="column"
      maxW="48"
      flexGrow={0}>
      <Text fontSize="sm">{bookingSelection === enumBookingOptions.PERCENTAGE ? 'Reserva en porcentaje' : 'Reserva en moneda'}</Text>
      <InputGroup>
        { bookingSelection === enumBookingOptions.CURRENCY && <InputLeftAddon children="$"/>}
        <Input 
          defaultValue={0}
          max={bookingSelection === enumBookingOptions.PERCENTAGE ? 100 : undefined}
          type="number" 
          value={inputValue}
          onChange={({target}) => {
            setInputValue(target.value);
            getBookingDetails({
              type: bookingSelection,
              bookingValue: target.value
            })
          }}
          focusBorderColor="green"/>
        { bookingSelection === enumBookingOptions.PERCENTAGE && <InputRightAddon children="%"/>}
      </InputGroup>
      <ButtonGroup
        colorScheme="teal"
        size="xs"
        isAttached>
        <Button 
          isActive={bookingSelection === enumBookingOptions.CURRENCY ? true : false} 
          onClick={() => handleBookingSelection(enumBookingOptions.CURRENCY)}>
            En moneda</Button>
        <Button 
          isActive={bookingSelection === enumBookingOptions.PERCENTAGE ? true : false} 
          onClick={() => handleBookingSelection(enumBookingOptions.PERCENTAGE)}>
            En porcentaje</Button>
      </ButtonGroup>
    </Flex>
  )
}

type BookingOptionsType = 'percentage' | 'currency';

enum enumBookingOptions {
  PERCENTAGE = 'percentage',
  CURRENCY = 'currency',
}