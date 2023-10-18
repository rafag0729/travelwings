import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { TicketDetailsProps, TicketPropsExtended, TicketType } from '../components/interfaces';
import { CalendarInput } from './CalendarInput'
import { TicketAirlineInput } from './TicketAirlineInput'
import { TicketCityInput } from './TicketCityInput'

interface TicketInputProps {
  type: TicketType | 'ambos';
  getTicket: ({}: TicketPropsExtended) => void;
  action?: boolean;
  label?: boolean;
};

export const TicketInput = ({type, getTicket, label = true}: TicketInputProps) => {
  return (
    <>
      { (type === 'ida' || type === 'ambos') && (
        <Ticket 
          label={label} 
          getTicket={(value) => {
            if (type === 'ambos') return getTicket({type: 'ida', ...value})
            getTicket(value)
          }}
          type='ida' />
        )}
      { (type === 'regreso' || type === 'ambos') && (
        <Ticket 
          label={label}
          getTicket={(value) => {
            if (type === 'ambos') return getTicket({type: 'regreso', ...value})
            getTicket(value)
          }}
          type='regreso' />
        )}
    </>
  )
}

interface TicketProps {
  label?: boolean;
  type: TicketType;
  action?: boolean
  getTicket: ({}: TicketDetailsProps) => void;
}

const Ticket = ({label = true, type, action = true, getTicket}: TicketProps) => {

  const [city, setCity] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [airline, setAirline] = useState('');

  return (
    <>
      { label && (
        <Text
          fontSize='small'
          fontWeight='bold'
          color='teal'
          textAlign='right'
        >Tiquete de {type}</Text>
      )}
      <TicketCityInput 
        type={type} 
        getValue={(value) => setCity(value)}
        />
      <CalendarInput
        type={type === 'ida' ? 'inicio' : 'salida'} 
        getValue={(value) => setDate(value)}
        />
      <TicketAirlineInput 
        getValue={(value) => setAirline(value)}
      />
      { action && (
        <Button
          colorScheme="teal"
          disabled={city.length <= 2 && !date && airline.length <= 2 ? true : false}
          onClick={() => getTicket({city, date, airline})}
          >Añadir detalles
        </Button>
      )}
    </>
  )
}