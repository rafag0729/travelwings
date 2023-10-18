import { IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { useForm } from 'hooks';
import { IconType } from 'react-icons';
import { FaPlus } from 'react-icons/fa'

interface AddInputProps {
  placeholder: string;
  Icon: IconType;
  action: (value: string) => void;
}

export const AddInput = ({ placeholder, Icon, action }: AddInputProps) => {

  const {value, handleFormChange} = useForm({value: ''});

  return (
    <InputGroup mb="4">
      <InputLeftElement
        pointerEvents="none"
        color='gray.300'
        children={<Icon color='blackAlpha.100'/>}/> 
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleFormChange('value', e.target.value) }
        focusBorderColor="green.500"/>  
      <InputRightElement
        children={<IconButton 
          colorScheme="teal"
          size="sm"
          disabled={value.length <= 2}
          aria-label="add-offer" 
          onClick={() => {
            action(value);
            handleFormChange('value', '');
          }}
          icon={<FaPlus />}/>}/>
    </InputGroup>
  )
}
