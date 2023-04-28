import HTMLReactParser from "html-react-parser"
import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { LegalDocsModalProps } from "./interfaces"
import { injectStyles } from "utils/injectStylesHtmlDocs"


export const LegalDocsModal = ({isOpen, closeModal, title, body}: LegalDocsModalProps) => {
  return (
    <Modal
      size="4xl"
      scrollBehavior="inside"
      isOpen={isOpen}
      onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box maxH="3xl">
            {HTMLReactParser(injectStyles(body))}
          </Box>  
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
