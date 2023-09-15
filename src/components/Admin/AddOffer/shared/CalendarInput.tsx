import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { AiFillCalendar } from 'react-icons/ai'

interface CalendarInputProps {
  type: 'inicio' | 'salida';
  getValue: (date: string) => void;
}

export const CalendarInput = ({type, getValue}: CalendarInputProps) => {
  return (
    <InputGroup colorScheme="teal">
      <InputLeftElement
        pointerEvents='none'
        color='gray.300'
        fontSize='1.2em'
        children={<AiFillCalendar />}
      />
      <Input 
        focusBorderColor="green.500"
        type="date"
        onChange={(e) => getValue(e.target.value)}
        placeholder={`Ingresa la fecha de ${type}`} />
    </InputGroup>
  )
}
