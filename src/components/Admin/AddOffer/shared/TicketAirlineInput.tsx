import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FaPlane } from 'react-icons/fa'

interface TicketAirlineInputProps {
  getValue: (airline: string) => void;
}

export const TicketAirlineInput = ({getValue}: TicketAirlineInputProps) => {
  return (
    <InputGroup colorScheme="teal">
      <InputLeftElement
        pointerEvents='none'
        color='gray.300'
        fontSize='1.2em'
        children={<FaPlane />}
      />
      <Input
        focusBorderColor="green.500"
        onChange={(e) => getValue(e.target.value)}
        placeholder={`Ingresa la aerolinea`} />
    </InputGroup>
  )
}
