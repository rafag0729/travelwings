import { Container, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { FlyOnly, HotelOnly, FlyAndHotel, GetEmail, GetWhatsapp } from 'components';


export const Quoter = () => {
  return (
    <Container
      maxW="full"
      mx="0"
      p="6"
      bgColor="brand.green"> 
      <Heading
        mb="6"
        fontSize="2xl"
        color="white"
        >¿Quieres recibir una cotización en especial?</Heading>

      <Text
        color="white"
        fontSize="sm"
        mb="8"
        >Diligencia el siguiente formulario para recibir tu cotización en tu número celular o whatsapp</Text>

      <Tabs 
        variant="enclosed"
        colorScheme="green"
        size="sm"
        align="center"
        isFitted
        color="white"
      >
        <TabList>
          <Tab _selected={{bgColor: 'green.700', color: 'white'}}>Sólo vuelo</Tab>
          <Tab _selected={{bgColor: 'green.700', color: 'white'}}>Sólo hotel</Tab>
          <Tab _selected={{bgColor: 'green.700', color: 'white'}}>Paquetes (Vuelo + Hotel)</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <FlyOnly />
          </TabPanel>
          <TabPanel>
            <HotelOnly />
          </TabPanel>
          <TabPanel>
            <FlyAndHotel />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Flex
        flexDir="row"
        justifyContent="space-evenly"
      >
        <GetWhatsapp title="Recibe tu cotización por Whatsapp" />

        <GetEmail />
      </Flex>
    </Container>
  )
}
