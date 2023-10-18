import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react"

interface TagItemProps {
  item: string;
  deleteAction: (item: string) => void;
}

export const TagItem = ({item, deleteAction}: TagItemProps) => {
  return (
    <Tag
      size="lg"
      borderRadius='full'
      mb="2"
      variant='solid'
      mr="2"
      colorScheme='green'>
      <TagLabel 
        textTransform="capitalize"
      >{item}</TagLabel>
      <TagCloseButton 
        onClick={() => deleteAction(item)}
      />
    </Tag>
  )
}
