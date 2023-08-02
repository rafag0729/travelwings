import { Box } from '@chakra-ui/react'
import { AddInput, OfferHeading, TagItem } from '../shared'

export const ExclusionsComponent = () => {
  return (
    <Box mb="6">
      <OfferHeading title='NO INCLUYE' />
      <AddInput />
      <TagItem item='Tarjeta de entrada a la isla'/>
    </Box>
  )
}
