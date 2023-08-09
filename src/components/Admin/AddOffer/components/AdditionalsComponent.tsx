import { Box, Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { AddInput, OfferHeading } from '../shared'


export const AdditionalsComponent = () => {
  return (
    <Box mb="6">
      <OfferHeading title='INCLUYE' />
      <AddInput 
        placeholder='Añadir adicionales'
        Icon={BsFillCreditCard2FrontFill}
      />
      <CheckboxGroup colorScheme='teal' defaultValue={[]}>
        <Stack direction={['column']}>
          <Checkbox value='asistencia_medica'>Asistencia médica</Checkbox>
          <Checkbox value='guia_local'>Guía local</Checkbox>
          <Checkbox value='fee_bancario'>Fee bancario</Checkbox>
        </Stack>
      </CheckboxGroup>
    </Box>
  )
}
