import { Box, FormControl, FormLabel, Select } from '@chakra-ui/react'


interface Props {
  label?: string;
}

export const GetHotelRate = ({ label = 'Categoria del hotel'}: Props) => {
  return (
    <Box
      flex="0 1 200px"
      mx="2"
    >
      <FormControl
        mr="4"
        mb="4">
          <FormLabel
            fontSize="sm"
            fontWeight="bold">{ label }</FormLabel>
          <Select
            defaultValue="3"
            size="sm"
            bgColor="white"
            color="gray.700"
          >
            <option value="">Selecciona una opción</option>
            <option value="1">1 estrella</option>
            <option value="2">2 estrella</option>
            <option value="3">3 estrella</option>
            <option value="4">4 estrella</option>
            <option value="5">5 estrella</option>
          </Select> 
      </FormControl>
    </Box>
  )
}
