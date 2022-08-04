import { Container } from "@chakra-ui/react"
import { HomeScreen } from "../screens/HomeScreen";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";



export const AppRouter = () => {
  return (
    <Container maxW="full" bg="blackAlpha.200" p="-0.5">
      <Header />
      
      <HomeScreen />
      
      <Footer />
    </Container>
  )
}
