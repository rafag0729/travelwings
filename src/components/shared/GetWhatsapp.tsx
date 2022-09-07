import { Box, Button, Checkbox, Fade, Flex, FormControl, FormErrorMessage, HStack, Icon, 
  Image, Input, InputGroup, InputLeftAddon, Text, useBoolean } from "@chakra-ui/react";
import { GoTriangleDown } from "react-icons/go";
import { useContext } from 'react';
import { CountriesContext } from "context";
import { FlagsSelect } from "components";
import { useForm } from "hooks";



interface Props {
  title: string
}

export const GetWhatsapp = ({title}: Props) => {

  const [flag, setFlag] = useBoolean();
  const [flagSearch, setFlagSearch] = useBoolean();
  const { tel, handleFormChange, error } = useForm({tel: ''})
  const {countrySelected} = useContext(CountriesContext);

  return (
    <Flex
      flexDir="column"
      flexGrow={1}
      mx="2"
    >
      { title && (
        <HStack mb="3">
          <Checkbox
            fontSize="sm"
            colorScheme="white"
            size="md"
            isChecked={flag}
            onChange={setFlag.toggle}
          />
          <Text
            fontSize="sm"
            color="white"
            >{title}</Text>
      </HStack>

      )}
      <Fade
        in={flag}
        unmountOnExit
      >
        <Flex
          position="relative"
          flexDirection="row"
          mb="5"
          bgColor="white"
          borderRadius="base"
          p="1"
          justifyContent="space-between"
          maxW='full'
          alignItems="center"
        >
          <Fade 
            in={flagSearch}
            unmountOnExit
          >
            <FlagsSelect
              deactivateSelect={ () => setFlagSearch.off() }
            />
          </Fade>

          <Box
            display="flex"
            mx="1" 
            w="20"
            justifyContent="center"
            alignItems="center"
          >
                {
                  !countrySelected 
                      ? ( <Box w="10" h="6" bgColor="gray.300" borderRadius="sm"></Box>)
                      : (
                        <Box>
                          <Image 
                            src={ countrySelected.flagImage } 
                            alt={ countrySelected.country }
                          />
                        </Box>
                      )
                }
                <Icon 
                  as={GoTriangleDown}
                  ml="1.5"
                  _hover={{ cursor: 'pointer' }}
                  onClick={ () => setFlagSearch.on() }
                />
          </Box>
          
          <InputGroup size="sm">
            <InputLeftAddon 
              w="14"
              children={
                (countrySelected) ? (
                  countrySelected.idd.suffixes?.length === 1 
                    ? countrySelected.idd.root + countrySelected.idd.suffixes[0]
                    : countrySelected.idd.root
                ) : "+"
              }
            />
            <FormControl isInvalid={error.error}>
              <Input
                pl="2"
                variant="flushed"
                size="sm"
                w="full"
                placeholder="Ingresa tu número Wpp"
                value={ tel }
                name="tel"
                onChange={(e) => handleFormChange('tel', e.target.value)}
              />
              { error.error && (
                <FormErrorMessage
                  position="absolute"
                  bottom="-6"
                  bgColor="red"
                  borderRadius="sm"
                  color="white"
                  px="1"
              >
                  {error.msg}</FormErrorMessage>
                )
              }
            </FormControl>
          </InputGroup>

          <Button
              size="sm"
              disabled={error.error}
              >Enviar</Button>
        </Flex>
      </Fade>
    </Flex>
  )
}
