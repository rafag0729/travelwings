import { Box, Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { OfferHeading } from '../shared'

export const FeedingComponent = () => {
  return (
    <Box mb="6">
      <OfferHeading title='ALIMENTACIÓN' />
      <CheckboxGroup colorScheme='teal' defaultValue={[]}>
        <Stack direction={['column']}>
          <Checkbox value='desayuno'>Desayuno</Checkbox>
          <Checkbox value='media_mañana'>Media mañana</Checkbox>
          <Checkbox value='almuerzo'>Almuerzo</Checkbox>
          <Checkbox value='media_tarde'>Media tarde</Checkbox>
          <Checkbox value='cena'>Cena</Checkbox>
          <Checkbox value='bar_abierto'>Bar abierto</Checkbox>
        </Stack>
      </CheckboxGroup>
    </Box>
  )
}
