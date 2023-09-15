import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { FaCity } from 'react-icons/fa'


interface TicketCityInputProps {
  type: 'ida' | 'regreso';
  getValue: (val: string) => void;
}

export const TicketCityInput = ({type, getValue}: TicketCityInputProps) => {
  return (
    <InputGroup colorScheme="teal">
      <InputLeftElement
        pointerEvents='none'
        color='gray.300'
        fontSize='1.2em'
        children={<FaCity />}
      />
      <Input 
        focusBorderColor="green.500"
        onChange={(e) => getValue(e.target.value)}
        placeholder={`Ingresa la ciudad de ${type}`} />
    </InputGroup>
  )
}
