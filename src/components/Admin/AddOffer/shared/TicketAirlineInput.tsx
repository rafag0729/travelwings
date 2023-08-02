import { IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { FaCheck, FaPlane } from 'react-icons/fa'

export const TicketAirlineInput = () => {
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
        placeholder={`Ingresa la aerolinea`} />
      <InputRightElement children={<IconButton
          colorScheme='teal'
          size="sm"
          aria-label='add airline'
          icon={<FaCheck />}/>} />
    </InputGroup>
  )
}
