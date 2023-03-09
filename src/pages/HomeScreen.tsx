import { Container, Flex } from "@chakra-ui/react";
import { Slider, Offers, Subscribe, Payment, Quoter } from "components";
import { CountriesContextProvider } from "context";
import { Fragment } from "react";



export const HomeScreen = () => {
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
      </CountriesContextProvider>
    </Fragment>
  )
}
