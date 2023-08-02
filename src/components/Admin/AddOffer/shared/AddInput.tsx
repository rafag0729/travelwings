import { IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
import { GiPalmTree } from 'react-icons/gi'

export const AddInput = () => {
  return (
    <InputGroup mb="4">
      <InputLeftElement
        pointerEvents="none"
        children={<GiPalmTree />}/> 
      <Input
        type="text"
        placeholder='Añadir destino'
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
