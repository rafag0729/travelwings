import { InputGroup, Select } from '@chakra-ui/react'


export const HotelStarSelect = () => {
  return (
    <InputGroup mb="4">
      <Select placeholder='Selecciona el tipo de hotel'>
        <option value='5star'>5 estrellas</option>
        <option value='4star'>4 estrellas</option>
        <option value='3star'>3 estrellas</option>
        <option value='2star'>2 estrellas</option>
        <option value='1star'>1 estrella</option>
        <option value='tourist'>Tipo turista</option>
      </Select>
    </InputGroup>
  )
}
