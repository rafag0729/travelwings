import { Box, CircularProgress, Fade, FormControl, FormLabel, Input, InputGroup, InputLeftElement, useBoolean } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs";
import { useEffect, useRef, useState } from 'react';
import { CitiesSelect, Timer } from 'components';
import { useForm } from "hooks";
import { getCities } from "services";
import { CitiesInterface } from "interfaces";


interface Props {
  label: string;
}

export const GetCity = ({label}: Props) => {

  const [flag, setFlag] = useBoolean();
  const {city, handleFormChange} = useForm({city: ''});
  const [wait, setWait] = useState(false);
  const [cities, setCities] = useState<CitiesInterface[]>([])
  
  const searchRef = useRef<String | null>(null);
  const citiesRef = useRef<CitiesInterface[]>([]);
  
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    onLaunchSearch();
    onFilterCities(city);
  }, [city])

  const onLaunchSearch = async() => {
    if(city.length < 3 ) return setFlag.off();
    if(city.length === 3) {
      if(city.slice(0, 3) !== searchRef.current?.slice(0,3) ){
        console.log({
          city: city.slice(0, 3),
          ref: searchRef.current?.slice(0,3),
        })
        searchRef.current = city.slice(0, 3);
        setWait(true);
      }
    }
  }

  const fetchingCities = async() => {
    setWait(false);
    setIsLoading(true)
    try {
      const citiesResp = await getCities();
      citiesRef.current = citiesResp;
      setCities(citiesResp);
      setIsLoading(false);
      setFlag.on();
    } catch (error) {
      setIsLoading(false);
      throw new Error("Error en la petición");
    }
  }

  const onFilterCities = (city: string) => {
    const filter = citiesRef.current.filter(c => c.name.toLowerCase().includes(city.toLowerCase()));
    setCities(filter);
  }

  const handleClick = () => {
    if(city.length >= 3) return setFlag.on();
  }
 
  return (
    <Box 
      flex="3 1 400px"
      mx="2">
      <FormControl flexGrow={1}>
        <FormLabel 
          fontSize="sm"
          fontWeight="bold">
            { label }
        </FormLabel>
        
        <InputGroup>
          <InputLeftElement pb="2" children={ 
            wait ? <Timer initial={2} fetchCities={fetchingCities}/> : 
            isLoading 
              ? <CircularProgress isIndeterminate size="20px" />  
              : <BsSearch fill="gray"/>
              } 
          />
          <Input
            variant="flushed"
            size="sm"
            bgColor="white"
            borderRadius="md"
            placeholder={`Ingresa la ciudad`} 
            color="gray.600"
            value={ city }
            name="city"
            onChange={(e) => handleFormChange('city', e.target.value)}
            onClick={handleClick}
          />
        </InputGroup>
        <Fade 
          in={flag}
          unmountOnExit
        >
          <CitiesSelect
            cities={cities}
            deactivateSelect={ () => setFlag.off() }
          />
        </Fade>
      </FormControl>
    </Box>
  )
}
