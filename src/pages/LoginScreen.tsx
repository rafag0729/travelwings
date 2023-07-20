import auth from "firebaseConfiguration/auth";
import { Button, CircularProgress, Container, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from "react-redux";
import { signIn } from "reduxStore/authSlice";
import { useForm } from 'hooks'
import { useState } from "react";

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const {email, psw, formErrors, handleFormChange} = useForm({email: '', psw: ''});
  const [loading, setLoading] = useState(false)

  const firebaseLogin = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, psw)
      .then(({user}) => {
        user.getIdTokenResult()
          .then(token => {
            dispatch(signIn({
              email: user.email,
              uid: user.uid,
              token: {
                accessToken: token.token,
                expirationTime: token.expirationTime,
              }
            }))
          })
          .catch((err) => console.log('Error getting token from provider: ', err))
      })
      .catch(err => console.log('Error sining with email and password provider: ', err))
      .finally(() => setLoading(false))
  }

  return (
    <Container mt="16" minWidth="container.lg">
      <Heading
        textAlign="center"
        pt="20">
        Administración Travel Wings
      </Heading>
      
      <Flex
        mt="16"
        direction="column"
        alignItems="center"
        >
        <Heading 
          mb="6"
          fontSize="lg">LOGUEATE CON TU CORREO Y CONTRASEÑA ASIGNADO</Heading>

        <FormControl
          isInvalid={formErrors?.email?.error}
          mb="8"
          maxW="xs">
          <FormLabel htmlFor='email' >Correo electrónico</FormLabel>
          <Input
            value={email}
            onChange={({target}) => handleFormChange('email', target.value)}
            id='email' 
            type='email' 
            size="md" />
          {formErrors?.email?.error 
            ? <FormErrorMessage>{formErrors?.email?.msg}</FormErrorMessage>
            : <FormHelperText>Agrega tu correo asignado</FormHelperText>}
        </FormControl>

        <FormControl
          isInvalid={formErrors?.psw?.error}
          mb="6"
          maxW="xs">
          <FormLabel htmlFor='password'>Contraseña</FormLabel>
          <Input 
            value={psw}
            onChange={({target}) => handleFormChange('psw', target.value)}
            id='password' 
            type='password' />
          {formErrors?.email?.error 
            ? <FormErrorMessage>{formErrors?.psw?.msg}</FormErrorMessage>
            : <FormHelperText>Ingresa tu contraseña</FormHelperText>}
        </FormControl>

          <Button
            isDisabled={(!email || formErrors?.email?.error) || (!psw || formErrors?.psw?.error) }
            rightIcon={
              loading ? 
                <CircularProgress
                  size="20px"
                  isIndeterminate />
                : <></>
            }
            size="lg"
            colorScheme="facebook"
            onClick={firebaseLogin}
          >Login</Button>
      </Flex>
    </Container>
  )
}
