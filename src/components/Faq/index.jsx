import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  Text,
  Center,
} from "@chakra-ui/react";

export function Faq() {
  return (
    <Box bg="bg" color="white">
      <Container w="100%" maxW={1120}>
        <Text fontSize="2xl" textAlign="center" pt="80px" pb="80px">
          Perguntas Frequentes
        </Text>
        <Accordion
          defaultIndex={[0]}
          allowMultiple
          display="flex"
          flexDir="column"
          gap="1rem"
        >
          <AccordionItem border="1px solid white" borderRadius="5px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={{base:'lg', lg:'2xl'}}>
                  Quais as formas de pagamento?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{base:'16px', lg:'lg'}}>
              À vista via pix, boleto ou em até 12x no cartão de crédito
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="1px solid white" borderRadius="5px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={{base:'lg', lg:'2xl'}}>
                Quanto tempo terei de acesso ao conteúdo? 
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{base:'16px', lg:'lg'}}>
            Um ano
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="1px solid white" borderRadius="5px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={{base:'lg', lg:'2xl'}}>
                  Tenho acesso imediato ao conteúdo?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{base:'16px', lg:'lg'}}>
              Sim, seu acesso é liberado imediatamente.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="1px solid white" borderRadius="5px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={{base:'lg', lg:'2xl'}}>
                  Terei algum tipo de suporte?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{base:'16px', lg:'lg'}}>
              Sim, suas perguntas serão respondidas no instagram que passo
              dentro da área de membros.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Center pt={100} align="center">
          <Text>Todos os direitos reservados - Produktiv 2022</Text>
        </Center>
      </Container>
    </Box>
  );
}
