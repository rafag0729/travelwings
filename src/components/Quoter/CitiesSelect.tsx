import { Button, Flex, Text } from "@chakra-ui/react"
import { CitiesInterface } from '../../interfaces/citiesInterface';



interface Props {
  cities: CitiesInterface[];
  deactivateSelect: () => void;
}

export const CitiesSelect = ({cities, deactivateSelect}: Props) => {

  /*
    Aca tendría que obtener la info del contexto
    Cuando cambie, aca deberia guardarlo en un estado
    Aca se actualizarian las ciudades filtradas según los cambios de letras
    Seleccionar la ciudad por defecto 
  */

  return (
    <Flex
      bgColor="white"
      p="2"
      direction="column"
      position="absolute"
      minW="2xs"
      top="100%"
      zIndex="1000"
      w="sm"
      maxH="2xs"
      borderRadius="md"
      boxShadow="dark-lg"
      onMouseLeave={deactivateSelect}
  >
      <Flex
          flexDir="column"
          overflowY="auto"
      >
          {   cities.length > 0 ? cities.map((city) => (
                <Button
                  key={city.name}
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
              )) :( 
                <Text 
                  color="green.700" 
                  fontWeight={700} 
                  fontSize="sm"
                  alignSelf="center"
                >No hay ciudades encontradas</Text>
              )
          }
      </Flex>
  </Flex>
  )
}
