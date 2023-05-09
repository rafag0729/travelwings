import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, CircularProgress, Flex, FormControl, FormErrorMessage, 
    Input, Tooltip, useBoolean } from '@chakra-ui/react'
import { useForm } from 'hooks';
import { useState } from 'react';
import { sendToBusiness } from 'utils/emailToBusiness';

export const GetEmail = () => {

    const { email, handleFormChange, error } = useForm({email: ''});
    const [ loading, setLoading ] = useBoolean();
    const [ operation, setOperation ] = useState<'success' | 'error' | null>(null)

    const handleSubmit = () => {
      if(!email || error.error) return;
      setLoading.on();   
      sendToBusiness({contact_email: email})
        .then(() => setOperation('success'))
        .catch(err => {
          console.log(err);
          setOperation('error');
        })
        .finally(() => {
          setLoading.off();
          setTimeout(() => {
            setOperation(null);
          }, 4000)
        })
    }

    return (
      <Flex
        flexDir="column"
        flexGrow={2}
        mx="2"
        maxW="2xl">
        <Flex
          flexDirection="row"
          mb="5"
          bgColor="white"
          borderRadius="base"
          p="1"
          position="relative">
            <FormControl isInvalid={error.error}>
              <Input 
                size="md"
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
                  borderRadius="md"
                  color="white"
                  px="1"
                >
                  {error.msg}</FormErrorMessage>) } 
            </FormControl>
            <Tooltip label="Ingresa un email vàlido para usar el botón">
              <Button
                size="md"
                onClick={handleSubmit}
                minW="24"
                // disabled={error.error || !email}
              >
                { !loading ? 'Enviar' : <CircularProgress isIndeterminate color="brand.blue" size='20px'/> }
              </Button>
            </Tooltip>
        </Flex>
        { operation && (
            <Alert status={operation === 'success' ? 'success' : 'error'}>
              <AlertIcon />
              <AlertTitle>{operation === 'success' ? 'Correo enviado exitosamente' : 'Fallo al enviar el correo'}</AlertTitle>
              <AlertDescription>{operation === 'success' ? 'Recibimos tu correo, te has suscritos ha nuestros correos de oferta' : 'Revisaremos que paso en el envio, pronto estará nuevamente disponible'}</AlertDescription>
            </Alert>
          )
        }
    </Flex>
  )
}
