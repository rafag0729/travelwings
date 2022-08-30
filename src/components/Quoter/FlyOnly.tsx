import { Flex, FormControl, FormLabel, Input, Radio, RadioGroup, Select, Text } from "@chakra-ui/react"


export const FlyOnly = () => {
  return (
    <>
      <RadioGroup>
        <Flex
          direction="row"
          mb="4">
          <Radio 
            mr="6"
            colorScheme="green" 
            size="sm"
            value="1">
              <Text 
                fontWeight="bold"
                color="green.800">Ida y vuelta</Text>
          </Radio>
          <Radio 
            mr="6"
            colorScheme="green" 
            size="sm"
            value="2">
              <Text 
                fontWeight="bold"
                color="green.800">Sólo ida</Text>
          </Radio>
        </Flex>
      </RadioGroup>
      <Flex
          direction="row">
          <FormControl
            mr="4"
            mb="4">
            <FormLabel 
              fontSize="sm"
              fontWeight="bold">Origen</FormLabel>
            <Select
              size="sm"
              bgColor="white"
              color="blackAlpha.700"
              placeholder="Ingrese la ciudad origen..."
            >
              <option value="Cali, Colombia">Cali</option>
              <option value="Pereira, Colombia">Pereira</option>
            </Select>
          </FormControl>

          <FormControl 
            mr="4"
            mb="4">
            <FormLabel
              fontSize="sm"
              fontWeight="bold">Fecha ida</FormLabel>
            <Input
              size="sm"
              bgColor="white"
              color="blackAlpha.700"
              type="date"/>
          </FormControl>

          <FormControl 
            mr="4"
            mb="4">
            <FormLabel
              fontSize="sm"
              fontWeight="bold">Destino</FormLabel>
            <Select
              size="sm"
              bgColor="white"
              color="blackAlpha.700"
              placeholder="Ingrese la ciudad origen..."
              >
              <option value="Cali, Colombia">Cali</option>
              <option value="Pereira, Colombia">Pereira</option>
            </Select>
          </FormControl>

          <FormControl 
            mr="4"
            mb="4">
            <FormLabel
              fontSize="sm"
              fontWeight="bold">Fecha regreso</FormLabel>
            <Input 
              size="sm"
              bgColor="white"
              color="blackAlpha.700"
              type="date"/>
          </FormControl>

          <FormControl 
              mr="4"
              mb="4">
              <FormLabel
                fontSize="sm"
                fontWeight="bold">Número personas</FormLabel>
              <Input 
                size="sm"
                bgColor="white"
                color="blackAlpha.700"
                type="number"/>
          </FormControl>
      </Flex>
    </>
  )
}
