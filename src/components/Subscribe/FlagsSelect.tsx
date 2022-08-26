import { Input, InputGroup, Flex } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CountriesContext } from "context";
import { Flags } from "components";
import { useForm } from 'hooks';



interface Props {
    deactivateSelect: () => void;
}

export const FlagsSelect = ({deactivateSelect}: Props) => {
    
    const { search, handleFormChange } = useForm({search: ''});
    const { countriesList } = useContext(CountriesContext);

    const [countries, setCountries] = useState(countriesList ? countriesList : [])

    useEffect(() => {
        if(!search.trim() && countriesList) return setCountries(countriesList);
        const filter = countries.filter(c => c.country.toLocaleLowerCase().includes(search.toLowerCase()))
        setCountries(filter);
    }, [search])

    return (
        <Flex
            bgColor="white"
            p="2"
            direction="column"
            position="absolute"
            top="130%"
            minW="2xs"
            zIndex="1000"
            maxH="2xs"
            borderRadius="md"
            boxShadow="lg"
            onMouseLeave={deactivateSelect}
        >
            <InputGroup
                size="sm"
                variant="flushed"
                minW="8"
                position="relative"
                mb="10"
            >
                <Input 
                    autoComplete="off"
                    placeholder='Busca tu país'
                    position="absolute"
                    top="0"
                    left="0"
                    zIndex={1000}
                    bgColor="white"
                    type="search"
                    onChange={({target}) => handleFormChange('search', target.value)}
                    name="search"
                    value={ search }
                />
            </InputGroup>
            <Flex
                flexDir="column"
                overflowY="auto"
            >
                {   countries.map(({country, flagImage, idd, fifaCode}, i) => (
                        <Flags 
                            key={country}
                            countryDetails={{
                                country, flagImage, idd, fifaCode
                            }}
                            i={i}
                        />
                    ))
                }
            </Flex>
        </Flex>
    )
}