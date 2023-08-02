import { IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { FaBed, FaPlus } from 'react-icons/fa'


export const BaseInputText = () => {
  return (
    <InputGroup mb="4">
      <InputLeftElement
        pointerEvents="none"
        color='gray.300'
        children={<FaBed />}/> 
      <Input
        type="text"
        placeholder='Añadir nombre de hotel'
        focusBorderColor="green.500"/>  
      <InputRightElement
        children={<IconButton 
          colorScheme="teal"
          size="sm"
          aria-label="add-offer" 
          icon={<FaPlus />}/>}/>
    </InputGroup>
  )
}
