import { Box, Image, Link, Flex } from '@chakra-ui/react';
import logoTW from './../media/logo.png';



export const Header = () => {
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
              <Image src={ logoTW } alt="Travel Wings"/>  
            </Box>

            <Box>
              <Link
                color="blackAlpha.500"
                p={4}
                fontSize="md">
                  Ofertas</Link>
              <Link
                color="blackAlpha.500"
                p={4}
                fontSize="md">
                  Contactanos</Link>
            </Box>
          </Flex>
    </Flex>
  )
}
