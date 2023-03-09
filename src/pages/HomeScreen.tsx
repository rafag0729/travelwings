import { Container, Flex } from "@chakra-ui/react";
import { WhatsappIcon } from "assets";
import { Slider, Offers, Subscribe, Payment, Quoter } from "components";
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
          {/* <Flex
            justifyContent="space-between"
            flexDirection="row"
            p="0"> */}
            <Subscribe />
            <Payment />
          {/* </Flex> */}
          {/* <Quoter /> */}
          <WhatsappIcon onClick={sendWpp}/>
      </CountriesContextProvider>
    </Fragment>
  )
}
