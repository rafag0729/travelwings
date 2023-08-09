import { Box } from '@chakra-ui/react'
import { GiPalmTree } from 'react-icons/gi'
import { AddInput, OfferHeading, TagItem } from '../shared'


export const DestinyComponent = () => {
  return (
    <Box mb="6" minW="">
      <OfferHeading title="DESTINO" />
      <AddInput 
        placeholder='Añadir destino'
        Icon={GiPalmTree}
      />
      <TagItem item="Santa Marta"/>
      <TagItem item="Guajira"/>
    </Box>
  )
}
