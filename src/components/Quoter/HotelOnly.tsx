import { Flex } from "@chakra-ui/react"
import { GetCity, GetDate, HotelRate, GetQuantity } from 'components';



export const HotelOnly = () => {
  return (
    <>
      <Flex mb="4">
        <GetCity label="Ciudad de destino" />
      </Flex>
      <Flex 
        justifyContent="space-between"
        mb="4"
      >
        <GetDate label="Fecha de inicio"/>

        <GetDate label="Fecha de regreso"/>
      </Flex>
      <Flex justifyContent="space-between">
        <HotelRate />

        <Flex justifyContent="flex-end">
          <GetQuantity label="Nro. adultos"/>

          <GetQuantity label="Nro. niños"/>
        </Flex>
      </Flex>
    </>
  )
}
