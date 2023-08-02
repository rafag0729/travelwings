import { IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { FaCheck, FaCity } from 'react-icons/fa'


interface TicketCityInputProps {
  type: 'salida' | 'regreso';
}

export const TicketCityInput = ({type}: TicketCityInputProps) => {
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
        placeholder={`Ingresa la ciudad de ${type}`} />
      <InputRightElement children={<IconButton
          colorScheme='teal'
          size="sm"
          aria-label='Search database'
          icon={<FaCheck />}/>} />
    </InputGroup>
  )
}
