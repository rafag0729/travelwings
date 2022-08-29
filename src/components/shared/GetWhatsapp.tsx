import { Box, Button, Checkbox, CircularProgress, Fade, Flex, FormControl, FormErrorMessage, HStack, Icon, 
  Image, Input, InputGroup, InputLeftAddon, Text, useBoolean } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
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
          flexDirection="row"
          mb="5"
          bgColor="white"
          borderRadius="base"
          p="1"
          justifyContent="space-between"
          maxW='full'
          alignItems="center"
        >
          <Box
            position="relative"
          >
            <Icon 
              as={AiOutlineSearch}
              mt="1"
              minW="8"
              transition="all 100ms ease-in"
              animation={!countrySelected ? 'scaleInOut 1s ease-in-out infinite' : ''}
              _hover={{ cursor: 'pointer', transform: 'scale(1.3)' }}
              _active={{ color: 'brand.blue' }}
              onClick={ () => setFlagSearch.on() }
            />
            <Fade 
              in={flagSearch}
              unmountOnExit
            >
              <FlagsSelect
                deactivateSelect={ () => setFlagSearch.off() }
              />
            </Fade>
          </Box>
          <Flex
            mx="1" 
            maxW="10"
            w="full"
            justifyContent="center"
            alignItems="center">
                {
                  !countrySelected 
                      ? <CircularProgress isIndeterminate size="20px" thickness="15px"/>
                      : (
                        <Box>
                          <Image 
                            src={ countrySelected.flagImage } 
                            alt={ countrySelected.country }
                          />
                        </Box>
                      )
                }
          </Flex>

          <InputGroup
            size="sm"
          >
            <InputLeftAddon 
              w="14"
              children={
                (countrySelected) ? (
                  countrySelected.idd.suffixes?.length === 1 
                    ? countrySelected.idd.root + countrySelected.idd.suffixes[0]
                    : countrySelected.idd.root
                ) : "#"
              }
            />
            <FormControl isInvalid={error.error}>
              <Input
                pl="2"
                variant="flushed"
                size="sm"
                placeholder="Ingresa tu número Wpp"
                maxW="3xs"
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
