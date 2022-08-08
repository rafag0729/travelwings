import { Container } from "@chakra-ui/react"
import { HomeScreen } from "pages";
import { Footer, Header } from "components";



export const AppRouter = () => {
  return (
    <Container maxW="full" bg="blackAlpha.200" p="-0.5">
      <Header />
      
      <HomeScreen />
      
      <Footer />
    </Container>
  )
}
