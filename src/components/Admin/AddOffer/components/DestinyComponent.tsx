import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { GiPalmTree } from 'react-icons/gi'
import { AddInput, OfferHeading, TagItem } from '../shared'

interface DestinyComponentProps {
  getDestinyList: (list: string[]) => void;
}

export const DestinyComponent = ({getDestinyList}: DestinyComponentProps) => {

  const [tagsList, setTagsList] = useState<string[]>([]);
  
  const updateList = (result: string[]) => {
    setTagsList(result);
    getDestinyList(result)
  }

  return (
    <Box mb="6" minW="">
      <OfferHeading title="DESTINO" />
      <AddInput 
        placeholder='Añadir destino'
        Icon={GiPalmTree}
        action={(item: string) => {
          const filter = tagsList.filter(t => t.toLowerCase().trim() === item.toLowerCase().trim())
          if(filter.length >= 1) return;
          const result = [...tagsList, item];
          updateList(result);
        }}
      />
      { tagsList.map((t, i) => (
        <TagItem 
          key={i.toString()}
          item={t}
          deleteAction={(item: string) => {
            const filter = tagsList.filter((t) => t.toLowerCase().trim() !== item.toLowerCase().trim() )
            updateList(filter);
          }}
        />
      ))}
    </Box>
  )
}
