import { Box, Checkbox, CheckboxGroup, Stack, useCheckboxGroup } from '@chakra-ui/react'
import { OfferHeading } from '../shared'
import { StringOrNumber } from './interfaces';

interface FeedingComponentProps {
  getFeedingValues: (values: StringOrNumber[]) => void;
}

export const FeedingComponent = ({getFeedingValues}: FeedingComponentProps) => {

  const {value} = useCheckboxGroup({
    defaultValue: [],
  })

  return (
    <Box mb="6">
      <OfferHeading title='ALIMENTACIÓN' />
      <CheckboxGroup 
        colorScheme='teal' 
        defaultValue={value} 
        onChange={(e) => getFeedingValues(e)}
      >
        <Stack direction={['column']}>
          <Checkbox 
            value='desayuno'
            >Desayuno</Checkbox>
          <Checkbox 
            value='media_mañana'>Media mañana</Checkbox>
          <Checkbox 
            value='almuerzo'>Almuerzo</Checkbox>
          <Checkbox 
            value='media_tarde'>Media tarde</Checkbox>
          <Checkbox 
            value='cena'>Cena</Checkbox>
        </Stack>
      </CheckboxGroup>
    </Box>
  )
}
