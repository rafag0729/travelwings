import { IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { IconType } from 'react-icons';
import { FaPlus } from 'react-icons/fa'

interface AddInputProps {
  placeholder: string;
  Icon: IconType
}

export const AddInput = ({ placeholder, Icon }: AddInputProps) => {
  return (
    <InputGroup mb="4">
      <InputLeftElement
        pointerEvents="none"
        color='gray.300'
        children={<Icon color='blackAlpha.100'/>}/> 
      <Input
        type="text"
        placeholder={placeholder}
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
