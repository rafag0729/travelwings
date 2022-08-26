import { Button, Checkbox, Fade, Flex, FormControl, FormErrorMessage, 
    HStack, Input, Text, useBoolean } from '@chakra-ui/react'
import { useForm } from 'hooks';



export const SubscribeEmail = () => {

    const [flag, setFlag] = useBoolean();
    const { email, handleFormChange, error } = useForm({email: ''});

    return (
        <>
            <HStack mb="3">
                <Checkbox
                    fontSize="sm"
                    colorScheme="white"
                    size="md"
                    isChecked={flag}
                    onChange={setFlag.toggle}
                />
                <Text
                    fontSize="sm"
                    color="white"
                    >Recibe nuestras ofertas por Correo</Text>
            </HStack>
            <Fade
                in={flag}
            >
                <Flex
                    flexDirection="row"
                    mb="5"
                    bgColor="white"
                    borderRadius="base"
                    p="1"
                    position="relative"
                >
                    <FormControl isInvalid={error.error}>
                        <Input 
                            size="sm"
                            placeholder='correo@correo.com'
                            type="email"
                            variant="flushed"
                            isInvalid={error.error}
                            mx="1"
                            name="email"
                            value={email}
                            onChange={(e) => handleFormChange('email', e.target.value)}
                        />
                        { error.error && (
                            <FormErrorMessage
                                position="absolute"
                                bottom="-6"
                                bgColor="red"
                                borderRadius="sm"
                                color="white"
                                px="1"
                            >
                                {error.msg}</FormErrorMessage>) } 
                    </FormControl>
                    <Button
                        size="sm"
                        disabled={error.error}
                    >
                        Enviar
                    </Button>
                </Flex> 
            </Fade>
    </>
  )
}
