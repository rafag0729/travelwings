import { Box, Image, Flex, Button, Text } from '@chakra-ui/react';
import { logoTWG } from 'assets';
import { useState } from 'react';
import { signOut as signOutFb } from 'firebase/auth'
import auth from 'firebaseConfiguration/auth';
import { signOut } from 'reduxStore/authSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'reduxStore';


export const Header = () => {

  const dispatch = useDispatch();
  const [closeSessionLoading, setCloseSessionLoading] = useState(false)
  const {logged, user} = useSelector(({auth}: RootState) => auth)

  const closeSessionFirebase = () => {
    setCloseSessionLoading(true);
      signOutFb(auth)
        .then(() => dispatch(signOut()))
        .catch((err) => console.error('Error logging out firebase: ', err))
        .finally(() => setCloseSessionLoading(false))
  }

  const emailFormatted = (email: string) => {
    const index = email.indexOf('@');
    return email.slice(0, index);
  }

  return (
    <Flex 
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="100"
        boxShadow="md"
        justifyContent="center"
        maxW="container.full" 
        p={2}
        bg="white">
          <Flex
            align="center"
            flexDirection="row"
            justifyContent="space-between"
            flexGrow={2}
            bgColor="white"
            maxW="container.lg">
            <Box maxW={32}> 
              <Image src={ logoTWG } alt="Travel Wings"/>  
            </Box>

            <Box>
              { logged && (
                  <> 
                    <Flex
                      align="center"
                      direction="row">
                        <Box>
                        <Text
                          mr="4"
                          fontWeight="bold"
                          color="red.500"
                        >{emailFormatted(user?.email || '')}</Text>
                      </Box>
                      <Button
                        colorScheme="red"
                        onClick={closeSessionFirebase}
                        isLoading={closeSessionLoading}
                        >Cerrar sesión</Button>  
                    </Flex>
                  </>   
                )
              }
            </Box>
          </Flex>
    </Flex>
  )
}
