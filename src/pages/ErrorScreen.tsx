import { Container, Heading, Text } from "@chakra-ui/react";

export const ErrorScreen = () => {
  return (
    <Container
      maxW="full"
      centerContent
      minH="3xl"
      flexDirection="column"
      justifyContent="center"
    >
        <Heading
          bgColor="brand.red"
          mb="10"
          color="white"
        >
            Upps!
        </Heading>
        <Text
          fontSize="6xl"
          textAlign="center"
        >
          Contenido no encontrado
          </Text>
    </Container>
  );
}