import { Button, Checkbox, Flex, HStack, Input, Select, Text } from "@chakra-ui/react"

export const SubscribeWpp = () => {

    


  return (
    <>
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

        <Flex
            flexDirection="row"
            mb="5"
            bgColor="white"
            borderRadius="base"
            p="1"
            justifyContent="space-between"
            >
            <HStack>
                <Select
                variant="flushed"
                maxW="max-content"
                size="sm"
                bg="white"
                placeholder="+59">
                <option value="+57">+57</option>
                <option value="+58">+58</option>
                <option value="+59">+59</option>
                </Select>
                
                <Input
                size="sm"
                variant="flushed"
                placeholder="Ingresa tu número Wpp"
                minW="xs"
                />
            </HStack>

            <Button
                size="sm"
                >Enviar</Button>
        </Flex>
    </>
  )
}
