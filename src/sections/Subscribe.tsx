import { Box, Button, Checkbox, Editable, EditableInput, EditablePreview, Flex, Heading, HStack, NumberInput, NumberInputField, Select, Text } from "@chakra-ui/react"



export const Subscribe = () => {
  return (
    <Box
      flexGrow={1}
      p="6"
      bg="brand.blue">
        <Heading
          fontSize="2xl"
          color="white"
          mb="6"
          >Suscribete a nuestras ofertas</Heading>
        <Text
          color="white"
          fontSize="sm"
          mb="4"
          >Para recibir nuestras ofertas al instante en tu Correo o Whatsapp, diligencia los siguientes campos y acepta</Text>

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

        {/* Subscribe whatsapp */}
        <Flex
          flexDirection="row"
          mb="5"
          bgColor="white"
          borderRadius="base"
          p="1"
          >
          <Select 
            size="sm"
            bg="white"
            placeholder="+57">
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
          </Select>
          
          <NumberInput
            size="sm"
            >
            <NumberInputField
              bgColor="white"
              />
          </NumberInput>

          <Button
            size="sm"
            >Enviar</Button>
        </Flex>

        
        <HStack>
          <Checkbox
            fontSize="sm"
            colorScheme="white"
            size="md"/>
            <Text
              fontSize="sm"
              color="white"
              >Recibe nuestras ofertas por Correo</Text>
        </HStack>

        {/* Subscribe email */}
        <Flex
          flexDirection="row"
          mb="5"
          bgColor="white"
          borderRadius="base"
          p="1"
          >
          <Editable
            size="sm"
            >
            <EditablePreview />
            <EditableInput />
          </Editable>

          <Button
            size="sm"
            >Enviar</Button>
        </Flex>
    </Box>
  )
}
