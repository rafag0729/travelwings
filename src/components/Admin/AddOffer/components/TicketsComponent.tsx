import { Box, Button, Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { OfferHeading, TicketInput } from "../shared"
import { TicketDetailsProps, TicketProps, TicketPropsExtended } from "./interfaces";

interface TicketsComponentProps {
  getTicketDetails: (ticketDetail: TicketProps[]) => void;
}

const ticketType = (type: 'ida' | 'regreso', details?: null | TicketDetailsProps) => ({
  type,
  details: !details ? null : details,
})

export const TicketsComponent = ({getTicketDetails}: TicketsComponentProps) => {

  const [radioTicket, setRadioTicket] = useState('noTicket');
  const [expandTicketDetail, setExpandTicketDetail] = useState(false);

  let tickets = [ticketType('ida'), ticketType('regreso')]

  const onChangeRadioTicket = (ticketId: string) => {
    setRadioTicket(ticketId);
    handleRadioValue(ticketId)
  }

  const handleRadioValue = (value: string) => {
    if (value === 'noTicket') return getTicketDetails([]);
    if (value === 'ida') return getTicketDetails([ticketType(value)]);
    if (value === 'regreso') return getTicketDetails([ticketType(value)]);
    if (value === 'ambos') getTicketDetails(tickets);
  }

  const handleMultiTicketComponent = (details: TicketPropsExtended) => {
    tickets = tickets.map(t => {
      if (t.type === details.type) return ticketType(t.type, {
        city: details.city,
        date: details.date,
        airline: details.airline,
      })
      return t;
    })
    getTicketDetails(tickets)
  }

  return (
    <Box mb="6">
      <OfferHeading title='TIQUETES' />
      <Button
        onClick={() => setExpandTicketDetail((prev) => !prev)}
        size="xs"
        variant="outline"
        colorScheme="teal">
        { !expandTicketDetail ? 'Expandir' : 'Esconder'} detalles de tiquete
      </Button>
      <RadioGroup 
        mt="4"
        colorScheme="teal"
        onChange={onChangeRadioTicket} 
        value={radioTicket}>
        <Stack direction='column'>
          <Radio value='noTicket'>Sin tiquetes</Radio>
          <Radio value='ida'>Solo ida</Radio>
          { (radioTicket === 'ida' && expandTicketDetail) && (
            <TicketInput
              type="ida" 
              getTicket={(details) => getTicketDetails([ticketType('ida', details)])}
              /> 
          )}
          <Radio value='regreso'>Solo regreso</Radio>
          { (radioTicket === 'regreso' && expandTicketDetail) && (
            <TicketInput 
              type="regreso" 
              getTicket={(details) => getTicketDetails([ticketType('regreso', details)])}
              /> 
          )}
          <Radio value='ambos'>Ida y regreso</Radio>
          { (radioTicket === 'ambos' && expandTicketDetail) && (
            <>
              <TicketInput 
                type="ambos" 
                getTicket={(details) => handleMultiTicketComponent(details)}
                />
            </>
          )}
        </Stack>
      </RadioGroup>
    </Box>
  )
}