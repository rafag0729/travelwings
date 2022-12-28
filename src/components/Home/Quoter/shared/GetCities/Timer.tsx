import { Box, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react';


interface Props {
  initial: number,
  fetchCities: Function
}

export const Timer = ({initial, fetchCities}: Props) => {
  
  const [seconds, setSeconds] = useState(initial);

  useEffect(() => {
    const timerId = timer(); 
    return () => window.clearInterval(timerId);
  }, [])

  useEffect(() => {
    if(seconds !== 0) return;
    fetchCities(); 
  }, [seconds])
  
  
  const timer = () => {
    return window.setInterval(() => {
      setSeconds((prev) => { 
        if (prev > 0){
          return prev-1
        } else {
          return prev;
        }})
    }, 1000)
  }
  
  return (
    <Box
      bgColor="brand.red"
      p="1"
      w="6"
      h="6"
      borderRadius="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontSize="xs"
        fontWeight={700}
      >
        { seconds }
      </Text>
    </Box>
  )
}