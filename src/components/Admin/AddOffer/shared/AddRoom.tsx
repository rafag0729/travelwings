import { Flex, IconButton, InputGroup, InputRightElement, NumberInput, NumberInputField, Select } from "@chakra-ui/react"
import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import { RoomDetailType } from "../components/interfaces";
import { TagItem } from "./TagItem";

interface AddRoomProps {
  getRooms: (rooms: RoomDetailType[]) => void;
}

export const AddRoom = ({getRooms}: AddRoomProps) => {

  const [roomType, setRoomType] = useState('')
  const [roomQuantity, setRoomQuantity] = useState('');

  const [roomDetails, setRoomDetails] = useState<RoomDetailType[]>([]);

  const handleAddRoom = (type: string, quantity: string) => {
    const filter = roomDetails.filter((r) => r.type === type);
    if (filter.length >= 1) return updateRoomDetails(type, quantity);
    const rooms = [...roomDetails, {type, quantity}]
    getRooms(rooms);
    setRoomDetails(rooms);
  }

  const updateRoomDetails = (type: string, quantity: string) => {
    const map = roomDetails.map((r) => {
      if (r.type === type) {
        return {
          type: r.type,
          quantity: (Number(r.quantity) + Number(quantity)).toString()
        }
      }
      return r;
    })
    getRooms(map);
    setRoomDetails(map);
  }

  const handleRemoveRoom = (type: string) => {
    const filter = roomDetails.filter(r => r.type !== type);
    getRooms(filter);
    setRoomDetails(filter);
  }

  return (
    <>
    <InputGroup 
      mb="4">
      <Flex 
        direction="row">
        <Select 
          flexBasis="400"
          onChange={({target}) => setRoomType(target.value)}
          placeholder='Selecciona el tipo de habitación'>
          <option value='sencilla'>Sencilla</option>
          <option value='doble'>Doble</option>
          <option value='triple'>Triple</option>
          <option value='cuadruple'>Cuadruple</option>
          <option value='quintuple'>Quintuple</option>
          <option value='sectuple'>Sectuple</option>
        </Select>
        <NumberInput
          flexBasis="100"
          onChange={(e) => setRoomQuantity(e)}
          defaultValue={0} 
          min={0} 
          max={5}>
        <NumberInputField/>
        <InputRightElement
          children={<IconButton
            colorScheme="teal"
            size="sm"
            aria-label="add-offer" 
            disabled={!roomQuantity || roomQuantity === '0' || !roomType}
            onClick={() => handleAddRoom(roomType, roomQuantity)}
            icon={<FaPlus />}/>}/>
        </NumberInput>
      </Flex>
    </InputGroup>
    <Flex flexGrow={2}>
      { roomDetails.map((r, i) => (
        <TagItem
          key={r.quantity+i}
          item={`${r.quantity} - ${r.type}`} 
          deleteAction={() => handleRemoveRoom(r.type)} />
      ))}
    </Flex>
  </>
  )
}
