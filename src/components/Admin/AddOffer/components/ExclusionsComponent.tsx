import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { AiFillCopy } from 'react-icons/ai'
import { AddInput, OfferHeading, TagItem } from '../shared'

interface ExclusionsComponentProp {
  getExclusionsList: (list: string[]) => void;
}

export const ExclusionsComponent = ({getExclusionsList}: ExclusionsComponentProp) => {

  const [exclusionsList, setExclusionsList] = useState<string[]>([]);

  const handleAddExclussions = (item: string) => {
    const list = [...exclusionsList, item]
    setExclusionsList(list);
    getExclusionsList(list);
  }

  const handleRemoveExclussions = (item: string) => {
    const filter = exclusionsList.filter(e => e !== item);
    setExclusionsList(filter);
    getExclusionsList(filter);
  }

  return (
    <Box mb="6">
      <OfferHeading title='NO INCLUYE' />
      <AddInput 
        placeholder='Añade exclusiones'
        Icon={AiFillCopy}
        action={(item) => handleAddExclussions(item)}
      />
      { exclusionsList.map(e => (
        <TagItem
          key={e}
          item={e}
          deleteAction={(e) => handleRemoveExclussions(e)}
          />
      ))}
    </Box>
  )
}
