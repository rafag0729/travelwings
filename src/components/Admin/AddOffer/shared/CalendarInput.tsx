import { Flex, FormErrorMessage, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { useState } from 'react';
import { AiFillCalendar } from 'react-icons/ai'
import { ValidationErrorType, validationResult } from 'utils/dateValidations';

interface CalendarInputProps {
  type: 'inicio' | 'salida';
  getValue: (date: Date) => void;
  label?: string;
  dateValidation?: (date: Date | null) => ValidationErrorType;
}

export const CalendarInput = ({type, getValue, label = '', dateValidation}: CalendarInputProps) => {

  const [isInvalid, setIsInvalid] = useState<ValidationErrorType>(validationResult(true));

  return (
    <Flex
      flexDir="column"
      flexGrow={1}>
      { label.length >= 2 && (
        <Text
          color="teal"
          fontWeight="semibold">
          {label}
        </Text>
      )}
      <InputGroup 
        colorScheme="teal">
        <InputLeftElement
          pointerEvents='none'
          color='gray.300'
          fontSize='1.2em'
          children={<AiFillCalendar />}
        />
        <Input 
          focusBorderColor="green.500"
          errorBorderColor='red.500'
          type="date"
          isInvalid={isInvalid.error}
          onChange={(e) => {
            const date = new Date(e.target.value);
            if (dateValidation) {
              const validation = dateValidation(date);
              setIsInvalid(validation);
              if (!validation.error) getValue(date);
            } else getValue(date);
          }}
          placeholder={`Ingresa la fecha de ${type}`} />
      {isInvalid.error && (
        <Text
          position="absolute"
          bottom="-6"
          right="0"
          display="inline"
          zIndex="100"
          backgroundColor="red.500"
          p=".5"
          color="white"
          fontSize="sm"
        >{isInvalid.msg}</Text>
      )}
      </InputGroup>
    </Flex>
  )
}
