import { Flex, Radio, RadioGroup, Text } from "@chakra-ui/react"
import { GetCity, GetDate, GetQuantity } from 'components';


export const FlyOnly = () => {
  return (
    <>
      <RadioGroup>
        <Flex
          direction="row"
          mb="4">
          <Radio 
            mr="6"
            colorScheme="green" 
            size="sm"
            value="1">
              <Text 
                fontWeight="bold"
                color="green.800">Ida y vuelta</Text>
          </Radio>
          <Radio 
            mr="6"
            colorScheme="green" 
            size="sm"
            value="2">
              <Text 
                fontWeight="bold"
                color="green.800">Sólo ida</Text>
          </Radio>
        </Flex>
      </RadioGroup>
      <Flex mb="4">
        <GetCity label="Ciudad de origen" />

        <GetDate label="Fecha de salida"/>
      </Flex>
      <Flex>
        <GetCity label="Ciudad de destino" />

        <GetDate label="Fecha de regreso"/>
        
        <GetQuantity />
      </Flex>
    </>
  )
}
