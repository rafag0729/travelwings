import { Container, Flex, Heading, Text, useDisclosure } from "@chakra-ui/react";
import { LegalDocsModal } from "components/LegalDocsModal";
import { PRIVACY_POLICY_DOCUMENT, TERMS_CONDITIONS_DOCUMENT } from "data/legalDocuments";

export const Footer = () => {
  const {isOpen: isOpenPP, onClose: onClosePP, onOpen: onOpenPP } = useDisclosure();
  const {isOpen: isOpenST, onClose: onCloseST, onOpen: onOpenST } = useDisclosure();

  return (
    <Container maxW="full" bgGradient="linear(to-r, brand.red, brand.blue)"> 
      <Container p="6" maxW="container.lg">
        <Heading color="white" fontSize="2xl" mb="6" textAlign={['center', 'left']}>
          Contactanos
        </Heading>

        <Flex mb="6" flexDirection="column">
          <Text fontSize="medium" color="white" textAlign={['center', 'left']}>Pereira, Risaralda, Colombia</Text>
          <Text fontSize="medium" color="white" textAlign={['center', 'left']}>301 593 8074</Text>
          <Text fontSize="medium" color="white" textAlign={['center', 'left']}>travelwingsagencia@gmail.com</Text>
        </Flex> 

        <Flex direction={['column', 'row']} justifyContent="space-between" alignItems={['center']}>
          <Flex flexDirection={["column", "row"]}>
            <Text 
              fontSize="s" 
              color="white"
              cursor="pointer"
              mr="4"
              onClick={onOpenST}
              _hover={{textDecoration: 'underline'}}
              >
                Terminos de servicio
            </Text>
            <Text
              mb={["4", "0"]}
              fontSize="s" 
              color="white" 
              cursor="pointer"
              _hover={{textDecoration: 'underline'}}
              onClick={onOpenPP}>
                Política de privacidad
            </Text>
          </Flex>
          <Text
            fontSize="s" color="white" textAlign="center">© 2022. Travel Wings S.A.S. Todos los derechos reservados</Text>
        </Flex>
      </Container>
      <LegalDocsModal
        isOpen={isOpenPP}
        closeModal={onClosePP}
        title="Política de privacidad"
        body={PRIVACY_POLICY_DOCUMENT} />
      <LegalDocsModal
        isOpen={isOpenST}
        closeModal={onCloseST}
        title="Terminos de servicio"
        body={TERMS_CONDITIONS_DOCUMENT} />
    </Container>
  )
}
