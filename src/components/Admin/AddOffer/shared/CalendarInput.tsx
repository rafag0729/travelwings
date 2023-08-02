import { IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { AiFillCalendar } from 'react-icons/ai'
import { FaCheck } from 'react-icons/fa';

interface CalendarInputProps {
  type: 'salida' | 'regreso' | 'inicio' | 'salida';
}

export const CalendarInput = ({type}: CalendarInputProps) => {
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
        placeholder={`Ingresa la fecha de ${type}`} />
      <InputRightElement children={<IconButton
          colorScheme='teal'
          size="sm"
          aria-label='Search database'
          icon={<FaCheck />}/>} />
    </InputGroup>
  )
}
