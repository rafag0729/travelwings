import { Box, Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { CalendarInput, OfferHeading, TicketAirlineInput, TicketCityInput } from "../shared"


export const TicketsComponent = () => {

  const [radioTicket, setRadioTicket] = useState('1')

  return (
    <Box mb="6">
      <OfferHeading title='TIQUETES' />
      <RadioGroup 
        colorScheme="teal"
        onChange={setRadioTicket} 
        value={radioTicket}>
        <Stack direction='column'>
          <Radio value='1'>Sin tiquetes</Radio>
          <Radio value='2'>Solo ida</Radio>
          { radioTicket === '2' && (
            <>
              <TicketCityInput type='salida'/>
              <CalendarInput type='salida'/>
              <TicketAirlineInput />
            </>
          )}
          <Radio value='3'>Solo regreso</Radio>
          { radioTicket === '3' && (
            <>
              <TicketCityInput type='regreso'/>
              <CalendarInput type='regreso'/>
              <TicketAirlineInput />
            </>
          )}
          <Radio value='4'>Ida y regreso</Radio>
          { radioTicket === '4' && (
            <>
              <TicketCityInput type='salida'/>
              <CalendarInput type='salida'/>
              <TicketAirlineInput />
              <TicketCityInput type='regreso'/>
              <CalendarInput type='regreso'/>
              <TicketAirlineInput />
            </>
          )}
        </Stack>
      </RadioGroup>
    </Box>
  )
}
