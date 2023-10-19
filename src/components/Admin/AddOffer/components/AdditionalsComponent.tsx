import { Box, Checkbox, CheckboxGroup, Stack, useCheckboxGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { AddInput, OfferHeading } from '../shared'
import { StringOrNumber } from './interfaces';


interface AdditionalsComponentProps {
  getAdditionalsList: (list: StringOrNumber[]) => void;
}

export const AdditionalsComponent = ({getAdditionalsList}: AdditionalsComponentProps) => {

  const [checkboxList, setCheckboxList] = useState(['Asistencia médica', 'Fee bancario']);

  const {value } = useCheckboxGroup({
    defaultValue: [],
  });

  const handleCheckboxList = (item: string) => {
    setCheckboxList([...checkboxList, item]);
  }

  return (
    <Box mb="6">
      <OfferHeading title='INCLUYE' />
      <AddInput 
        placeholder='Añadir adicionales'
        Icon={BsFillCreditCard2FrontFill}
        action={(l) => handleCheckboxList(l)}
      />
      <CheckboxGroup 
        colorScheme='teal' 
        onChange={(list) => {
          getAdditionalsList(list)
        }}
        defaultValue={value}>
        <Stack direction={['column']}>
          { checkboxList.length > 0 && checkboxList.map((l) => (
            <Checkbox 
              key={l}
              value={l}>{l}</Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </Box>
  )
}
