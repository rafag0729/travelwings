import { Box, Button, Flex, Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { OfferHeading, TicketInput } from "../shared"

interface TicketsComponentProps {
  getTicketDetails: (ticketDetail: any) => void;
}

const ticketType = (type: 'ida' | 'regreso') => ({
  type,
  details: null,
})

export const TicketsComponent = ({getTicketDetails}: TicketsComponentProps) => {

  const [radioTicket, setRadioTicket] = useState('1');
  const [expandTicketDetail, setExpandTicketDetail] = useState(false);

  const onChangeRadioTicket = (ticketId: string) => {
    setRadioTicket(ticketId);
    handleRadioValue(ticketId)
  }

  const handleRadioValue = (value: string) => {
    if (value === 'noTicket') return getTicketDetails([]);
    if (value === 'ida') return getTicketDetails([ticketType(value)]);
    if (value === 'regreso') return getTicketDetails([ticketType(value)]);
    if (value === 'ambos') getTicketDetails([ticketType('ida'), ticketType('regreso')]);
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
          { (radioTicket === '2' && expandTicketDetail) && (
            <TicketInput
              type="ida" 
              getTicket={(value) => console.log(value)}
              /> 
          )}
          <Radio value='regreso'>Solo regreso</Radio>
          { (radioTicket === '3' && expandTicketDetail) && (
            <TicketInput 
              type="regreso" 
              getTicket={(value) => console.log(value)}
              /> 
          )}
          <Radio value='ambos'>Ida y regreso</Radio>
          { (radioTicket === '4' && expandTicketDetail) && (
            <>
              <TicketInput 
                type="ambos" 
                getTicket={() => {}}
                />
            </>
          )}
        </Stack>
      </RadioGroup>
    </Box>
  )
}