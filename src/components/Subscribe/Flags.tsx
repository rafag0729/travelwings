import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CountriesContext } from "context";
import { CountryRequired } from "interfaces";



interface FlagsProps {
    countryDetails: CountryRequired;
}

export const Flags = ({countryDetails}: FlagsProps) => {

    const { setCountrySelected } = useContext(CountriesContext)

    return (
        <Flex
            flexDir="row"
            minW="full"
            my="1"
            p="2"
            borderRadius="md"
            transition="all 100ms linear"
            _hover={{
                bgColor: 'brand.blue',
                cursor: 'pointer',
                color: 'white',
            }}
            onClick={() => setCountrySelected(countryDetails) }
        >
            <Box
                maxW="10"
                mr="3"
            >
                <Image src={countryDetails.flagImage} />
            </Box>
            <Text>{countryDetails.country}</Text>
        </Flex>
    )
}