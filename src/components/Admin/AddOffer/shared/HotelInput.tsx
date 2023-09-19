import { Flex } from "@chakra-ui/react"
import { AddRoom } from "./AddRoom"
import { BaseInputText } from "./BaseInputText"
import { CalendarInput } from "./CalendarInput"
import { HotelStarSelect } from "./HotelStarSelect"
import { TagItem } from "./TagItem"

export const HotelInput = () => {
  return (
    <>
      <BaseInputText />
      <HotelStarSelect />
      <CalendarInput 
        type='inicio' 
        getValue={() => {}}
        />
      <CalendarInput 
        type='salida' 
        getValue={() => {}}
        />
      <AddRoom />
      <Flex>
        <TagItem
          item="1xDoble" 
          deleteAction={() => {}}
        />
        <TagItem 
          item="1xTriple"
          deleteAction={() => {}}
          />
      </Flex>
    </>
  )
}
