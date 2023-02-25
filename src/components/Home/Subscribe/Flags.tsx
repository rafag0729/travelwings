import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CountriesContext } from "context";
import { CountryRequired } from "interfaces";



interface FlagsProps {
    countryDetails: CountryRequired;
    i: number
}

export const Flags = ({countryDetails, i}: FlagsProps) => {

    const { selectCountry } = useContext(CountriesContext)

    return (
        <Button
            flexDir="row"
            flexWrap="nowrap"
            justifyContent="flex-start"
            maxW="3xs"
            size="md"
            mx="2"
            my="1"
            p="2"
            borderRadius="md"
            transition="all 100ms linear"
            _hover={{
                bgColor: 'brand.blue',
                cursor: 'pointer',
                color: 'white',
            }}
            _focus={{
                bgColor: 'brand.blue',
                cursor: 'pointer',
                color: 'white',
            }}
            onClick={() => selectCountry(countryDetails) }
        >
            <Box
                maxW="10"
                mr="3"
            >
                <Image src={countryDetails.flagImage} />
            </Box>
            <Text
                fontSize="xs"
            >{  countryDetails.country.length > 25 
                    ? countryDetails.country.slice(0, 24) + '...'
                    : countryDetails.country
            }</Text>
        </Button>
    )
}
