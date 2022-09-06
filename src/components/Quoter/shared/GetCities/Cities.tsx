import { Button, Flex, Text } from "@chakra-ui/react"
import { CitiesInterface } from "interfaces"


interface Props {
  city: CitiesInterface
}

export const Cities = ({city}: Props) => {

  /* 
    Seleccionar la ciudad por defecto 
  */

  return (
    <Button
      flexDir="row"
      flexWrap="nowrap"
      justifyContent="flex-start"
      
      size="md"
      mx="2"
      my="1"
      p="2"
      color="green.500"
      borderRadius="md"
      transition="all 100ms linear"
      _hover={{
          bgColor: 'green.500',
          cursor: 'pointer',
          color: 'white',
      }}
      _focus={{
          bgColor: 'green.500',
          cursor: 'pointer',
          color: 'white',
      }}
      /* onClick={() => setCountrySelected(countryDetails) } */
    >
      <Flex alignItems="center">
        { city.iataCode && (
          <Text
            bgColor="green.500"
            color="white" 
            fontSize="sm"
            p="1"
            borderRadius="md"
            mr="2"
          >
            { city.iataCode }
          </Text>
        )}
        <Text fontSize="sm"> { city.name } - {city.address.countryCode}</Text>
      </Flex>
  </Button>
  )
}
