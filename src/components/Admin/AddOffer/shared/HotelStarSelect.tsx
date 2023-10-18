import { InputGroup, Select } from '@chakra-ui/react'
import { useState } from 'react'

interface HotelStarSelectProps {
  getHotelStartType: (type: string) => void;
}

export const HotelStarSelect = ({getHotelStartType}: HotelStarSelectProps) => {

  const [hotelTypeValue, setHotelTypeValue] = useState('')

  const handleSelectChange = (value: string) => {
    getHotelStartType(value);
    setHotelTypeValue(value);
  }

  return (
    <InputGroup mb="4">
      <Select
        defaultValue={hotelTypeValue} 
        onChange={({target}) => handleSelectChange(target.value)}
        placeholder='Selecciona el tipo de hotel'>
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
