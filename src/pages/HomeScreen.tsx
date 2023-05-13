import { Container, Flex } from "@chakra-ui/react";
import { WhatsappIcon } from "assets";
import { Slider, Subscribe, Payment } from "components";
import { Cooperatives } from "components/Home/Cooperatives/Cooperatives";
import { CountriesContextProvider } from "context";
import { Fragment } from "react";



export const HomeScreen = () => {

  const sendWpp = () => {
    const text = `https://api.whatsapp.com/send?phone=${process.env.REACT_APP_WPP_NUMBER}&text=Hola!!%20estoy%20interesado%20en%20ofertas%20en%20recibir%20ofertas%20de%20viaje%20a%20mi%20whatsapp`
    const link = document.createElement('a');
    link.setAttribute('href', text);
    link.setAttribute('target', '_blank');
    link.click();
  }

  return (
    <Fragment>
      <CountriesContextProvider>
        <Slider />
          {/* <Offers /> */}
        <Subscribe />
        <Container maxW="full" bgColor="white" display="flex" justifyContent="center">
          <Flex
            maxW="container.lg"
            display="flex"
            flexDirection="row"
            justifyContent="center">
              <Payment />
              <Cooperatives action={sendWpp}/>
          </Flex>
        </Container>
        {/* <Quoter /> */}
        <WhatsappIcon onClick={sendWpp}/>
      </CountriesContextProvider>
    </Fragment>
  )
}
