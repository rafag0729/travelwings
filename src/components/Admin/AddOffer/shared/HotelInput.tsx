import { Button, Flex } from "@chakra-ui/react"
import { useMemo, useState } from "react"
import { isAfterDate, isBeforeToday, ValidationErrorType, validationResult } from "utils/dateValidations"
import { HotelDetailsProps, RoomDetailType } from "../components/interfaces"
import { AddRoom } from "./AddRoom"
import { BaseInputText } from "./BaseInputText"
import { CalendarInput } from "./CalendarInput"
import { HotelStarSelect } from "./HotelStarSelect"

interface HotelInputProps {
  getHotelInputDetails: (details: HotelDetailsProps) => void;
  hotelType: 'hotel' | 'hostel' | 'airbnb';
}

export const HotelInput = ({getHotelInputDetails, hotelType}: HotelInputProps) => {

  const [hotelName, setHotelName] = useState('');
  const [hotelStarType, setHotelStarType] = useState('');
  const [startDate, setStartDate] = useState<Date | ''>('');
  const [endDate, setEndDate] = useState<Date | ''>('');
  const [roomDetails, setRoomDetails] = useState<RoomDetailType[]>([]);

  const hotelDetails = useMemo(() => ({
    name: hotelName,
    type: hotelStarType,
    startDate,
    endDate,
    rooms: roomDetails,
  }), [hotelName, hotelStarType, startDate, endDate, roomDetails])

  const [initialDateError, setInitialDateError] = useState(false);
  const [finalDateError, setFinalDateError] = useState(false);

  const validateInitialDate = (dateToCompare: Date | null): ValidationErrorType => {
    if (!dateToCompare) return validationResult(true);
    const isBefore = isBeforeToday(dateToCompare);
    setInitialDateError(isBefore.error);
    return isBefore;
  }

  const validateFinalDate = (dateToCompare: Date | null): ValidationErrorType => {
    let validationObject: ValidationErrorType = validationResult(true);
    if (!dateToCompare) return validationObject;
    const isBefore = isBeforeToday(dateToCompare);
    if (isBefore.error) validationObject = isBefore;
    if (startDate) {
      const isAfter = isAfterDate(dateToCompare, startDate);
      if (isAfter.error) validationObject = isAfter
    }
    setFinalDateError(validationObject.error);
    return validationObject;
  }

  return (
    <>
      { hotelType === 'hotel' && (
        <>
          <BaseInputText
            title='hotel'
            getValue={(value) => setHotelName(value)}
          />
          <HotelStarSelect 
            getHotelStartType={(value) => setHotelStarType(value)}
          />
        </>
      )}
      <Flex 
        dir="column">
        <CalendarInput 
          label="Fecha de inicio"
          type='inicio' 
          getValue={(date) => setStartDate(date)}
          dateValidation={(date) => validateInitialDate(date || null)}
          />
        <CalendarInput 
          label="Fecha de regreso"
          type='salida' 
          getValue={(date) => setEndDate(date)}
          dateValidation={(date) => validateFinalDate(date || null)}
          />
      </Flex>
      { hotelType !== 'airbnb' && (
        <AddRoom 
          getRooms={(rooms) => setRoomDetails(rooms)}
        />
      )}
      <Flex justifyContent="end">
        <Button
          colorScheme="teal"
          disabled={hotelName.length <= 2 && !hotelStarType && ((!startDate || initialDateError) || (!endDate || finalDateError)) && roomDetails.length == 0}
          onClick={() => getHotelInputDetails(hotelDetails)}
          >Añadir detalles
        </Button>
      </Flex>
    </>
  )
}
