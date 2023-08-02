import { Tag, TagCloseButton, TagLabel, TagLeftIcon } from "@chakra-ui/react"
import { AiFillEdit } from "react-icons/ai"

interface TagItemProps {
  item: string;
}

export const TagItem = ({item}: TagItemProps) => {
  return (
    <Tag
      size="lg"
      borderRadius='full'
      variant='solid'
      mr="2"
      colorScheme='green'>
      <TagLeftIcon as={AiFillEdit}/>
      <TagLabel>{item}</TagLabel>
      <TagCloseButton />
    </Tag>
  )
}
