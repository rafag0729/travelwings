import { Container, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { DashboardOffers } from 'components/Admin/DashboardOffers/DashboardOffers'
import { OfferItem } from 'components/Admin/OfferItem/OfferItem'



export const AdminTW = () => {
  return (
    <Container maxW="full" mt="10">
      <Container maxW="container.lg" pt="2" minH="2xl" bg="white">
        <Heading
          mt="10"
          color="brand.blue"
          fontWeight="bold"
          fontSize="2xl">
            Página de administración TW</Heading>

          <Tabs mt="8">
            <TabList>
              <Tab>Administrador de ofertas</Tab>
              <Tab>Administrador de cotizaciones</Tab>
              <Tab>Administrador de fotos por destino</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <DashboardOffers />
              </TabPanel>

              <TabPanel>
                <Text>Lista de cotizaciones</Text>
              </TabPanel>

              <TabPanel>
                <Text>Agregar destino y foto a usar</Text>
              </TabPanel>

            </TabPanels>
          </Tabs>
          
      </Container>
    </Container>
  )
}
