import { Box, Heading } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

export const ErrorScreen = () => {
  const error : any = useRouteError();
  console.error(error);

  return (
    <Box width="100%" height="container.md">
        <Heading>Página no encontrada!</Heading>

      
    </Box>
  );
}