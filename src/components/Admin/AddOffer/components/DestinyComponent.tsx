import { Box } from '@chakra-ui/react'
import { AddInput, OfferHeading, TagItem } from '../shared'


export const DestinyComponent = () => {
  return (
    <Box mb="6" minW="">
      <OfferHeading title="DESTINO" />
      <AddInput />
      <TagItem item="Santa Marta"/>
      <TagItem item="Guajira"/>
    </Box>
  )
}
