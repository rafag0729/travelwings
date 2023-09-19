import { IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react';
import { FaBed, FaPlus } from 'react-icons/fa'

interface BaseInputTextProps {
  title: string;
  getValue: (value: string) => void;
}

export const BaseInputText = ({title, getValue}: BaseInputTextProps) => {

  const [value, setValue] = useState('');

  return (
    <InputGroup mb="4">
      <InputLeftElement
        pointerEvents="none"
        color='gray.300'
        children={<FaBed />}/> 
      <Input
        type="text"
        placeholder={`Añadir nombre de ${title}`}
        focusBorderColor="green.500"
        onChange={({target}) => {
          setValue(target.value)
        }}
        />  
      <InputRightElement
        children={<IconButton 
          colorScheme="teal"
          size="sm"
          aria-label="add-offer"
          disabled={value.length <= 2}
          onClick={() => getValue(value)}
          icon={<FaPlus />}/>}/>
    </InputGroup>
  )
}
