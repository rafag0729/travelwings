import { useEffect, useState } from 'react';
import { Box, Button, Checkbox, Flex, HStack, Input, Select, Text, Image } from "@chakra-ui/react"
import { getAllCountries } from '../services/getCountries';
import { getCountriesSpecs } from '../helpers/countries';
import { CountryReq } from '../interfaces/CountriesInterface';


export const SubscribeWpp = () => {

  const [countriesReq, setCountriesReq] = useState<CountryReq[]>([]);

  useEffect(() => {
    countries();
  }, [])

  const countries = async() => {
    const countries = await getAllCountries();
    const countriesReq = getCountriesSpecs(countries);
    setCountriesReq(countriesReq);
  }
  

  return (
    <>
        <HStack
            mb="3">
            <Checkbox
            fontSize="sm"
            colorScheme="white"
            size="md"/>
            <Text
                fontSize="sm"
                color="white"
                >Recibe nuestras ofertas por Whatsapp</Text>
        </HStack>

        <Flex
            flexDirection="row"
            mb="5"
            bgColor="white"
            borderRadius="base"
            p="1"
            justifyContent="space-between"
            >
            <HStack>
                <Select
                variant="flushed"
                width="3xs"
                size="sm"
                bg="white"
                placeholder="+59">
                  {/* { idd.suffixes?.length === 1 ? idd.root + idd.suffixes[0] : idd.root } */}
                {
                  countriesReq.map(({name, flags, idd}, i) => (
                    <option 
                      key={i} 
                      value={idd.root}
                      style={{padding: '10px'}}
                    >
                      <Flex
                        flexDir="row"
                      >
                        <Box><Text>Hola</Text></Box>
                        <Box><Image src={flags.png} /></Box>
                      </Flex>
                    </option>
                  ))
                }
                </Select>
                
                <Input
                size="sm"
                variant="flushed"
                placeholder="Ingresa tu número Wpp"
                minW="xs"
                />
            </HStack>

            <Button
                size="sm"
                >Enviar</Button>
        </Flex>
    </>
  )
}
