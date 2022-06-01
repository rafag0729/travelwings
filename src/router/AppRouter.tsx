import { Container } from "@chakra-ui/react"
import { HomeScreen } from "../screens/HomeScreen"
import { Footer } from "../sections/Footer"
import { Header } from "../sections/Header"


export const AppRouter = () => {
  return (
    <Container maxW="full" bg="red.500">
        <Header />
        <HomeScreen />
        <Footer />
    </Container>
  )
}
