import { Flex, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, NumberInput, NumberInputField, Select } from "@chakra-ui/react"
import { FaBed, FaPlus } from "react-icons/fa"


export const AddRoom = () => {
  return (
    <Flex>
      <InputGroup mb="4">
        {/* <InputLeftElement
          pointerEvents="none"
          color='gray.300'
          children={<FaBed />}/> 
        <NumberInput
          placeholder='Añadir habitación'
          focusBorderColor="green.500"/>  
        <InputRightElement
          children={<IconButton
            colorScheme="teal"
            size="sm"
            aria-label="add-offer" 
            icon={<FaPlus />}/>}/> */}

        <Select placeholder='Selecciona el tipo de habitación'>
          <option value='sencilla'>Sencilla</option>
          <option value='doble'>Doble</option>
          <option value='triple'>Triple</option>
          <option value='cuadruple'>Cuadruple</option>
          <option value='quintuple'>Quintuple</option>
          <option value='sectuple'>Sectuple</option>
        </Select>
      </InputGroup>
      <NumberInput defaultValue={1} min={0} max={5}>
        <NumberInputField/>
        <InputRightElement
          children={<IconButton
            colorScheme="teal"
            size="sm"
            aria-label="add-offer" 
            icon={<FaPlus />}/>}/>
      </NumberInput>
    </Flex>
  )
}
