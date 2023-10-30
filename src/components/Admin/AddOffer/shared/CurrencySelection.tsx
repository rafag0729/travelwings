import { Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'

interface CurrencySelectionProps {
  getCurrencySelected: (currency: CurrencyOptions) => void;
}

export const CurrencySelection = ({getCurrencySelected}: CurrencySelectionProps) => {

  const [currencySelected, setCurrencySelected] = useState<CurrencyOptions>(CurrencySelectionOptios.COP);

  const handleCurrencySelection = (type: CurrencyOptions) => {
    setCurrencySelected(type);
    getCurrencySelected(type);
  }

  return (
    <Flex
      mb="4"
      direction="column">
      <Text>Seleccionar moneda</Text>
      <ButtonGroup
        colorScheme="teal"
        size="xs">
        <Button
          isActive={currencySelected === CurrencySelectionOptios.COP ? true : false} 
          onClick={() => handleCurrencySelection(CurrencySelectionOptios.COP)}>Peso colombiano</Button>
        <Button
          isActive={currencySelected === CurrencySelectionOptios.USD ? true : false} 
          onClick={() => handleCurrencySelection(CurrencySelectionOptios.USD)}>Dolar estadounidense</Button>
        <Button
          isActive={currencySelected === CurrencySelectionOptios.EUR ? true : false} 
          onClick={() => handleCurrencySelection(CurrencySelectionOptios.EUR)}>Dolar estadounidense</Button>
      </ButtonGroup>
    </Flex>
  )
}

export type CurrencyOptions = 'cop' | 'usd' | 'eur';

enum CurrencySelectionOptios {
  COP = 'cop',
  USD = 'usd',
  EUR = 'eur',
}