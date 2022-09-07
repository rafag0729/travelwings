import { Flex } from "@chakra-ui/react"
import { GetCity, GetDate, GetHotelRate, GetQuantity } from 'components';


export const FlyAndHotel = () => {
  return (
    <>
      <Flex mb="4">
        <GetCity label="Ciudad de origen" />

        <GetCity label="Ciudad de destino" />
      </Flex>
      <Flex 
        justifyContent="space-between"
        mb="4"
      >
        <GetDate label="Fecha de inicio"/>

        <GetDate label="Fecha de regreso"/>

        <GetHotelRate />

        <Flex justifyContent="flex-end">
          <GetQuantity label="Nro. adultos"/>

          <GetQuantity label="Nro. niños"/>
        </Flex>
      </Flex>
    </>
  )
}
