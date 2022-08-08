import { Box, Button, Checkbox, Editable, EditableInput, EditablePreview, Flex, Heading, HStack, Text } from "@chakra-ui/react"
import { SubscribeWpp } from "components";



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

        {/* Subscribe whatsapp */}
        <SubscribeWpp />

        
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
