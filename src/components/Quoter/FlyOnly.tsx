import { Flex, HStack, Radio, RadioGroup, Text } from "@chakra-ui/react"
import { GetCity, GetDate, GetQuantity } from 'components';
import { useState } from 'react';



export const FlyOnly = () => {

  const [flySelection, setFlySelection] = useState('1');

  return (
    <>
      <RadioGroup
        onChange={setFlySelection}
        value={flySelection}
      >
        <HStack mb="4">
          <Radio 
            mr="6"
            colorScheme="green" 
            size="sm"
            value="1"
          >
              <Text 
                fontWeight="bold"
                color="green.800">Ida y vuelta</Text>
          </Radio>
          <Radio 
            mr="6"
            colorScheme="green" 
            size="sm"
            value="2"
            isChecked={true}
            >
              <Text 
                fontWeight="bold"
                color="green.800">Sólo ida</Text>
          </Radio>
        </HStack>
      </RadioGroup>
      <Flex mb="4">
        <GetCity label="Ciudad de origen" />

        <GetCity label="Ciudad de destino" />
        
      </Flex>
      <Flex justifyContent="space-between">
        <GetDate label="Fecha de salida"/>
        
        { flySelection === '1' && <GetDate label="Fecha de regreso"/> } 

        <Flex flexGrow={0} justifyContent="flex-end">
          <GetQuantity label="Nro. adultos"/>

          <GetQuantity label="Nro. niños"/>
        </Flex>
      </Flex>
    </>
  )
}
