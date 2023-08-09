import { Box } from '@chakra-ui/react'
import { AiFillCopy } from 'react-icons/ai'
import { AddInput, OfferHeading, TagItem } from '../shared'

export const ExclusionsComponent = () => {
  return (
    <Box mb="6">
      <OfferHeading title='NO INCLUYE' />
      <AddInput 
        placeholder='Añade exclusiones'
        Icon={AiFillCopy}
      />
      <TagItem item='Tarjeta de entrada a la isla'/>
    </Box>
  )
}
