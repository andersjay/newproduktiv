import { Flex, Text, Container, Center, useBreakpointValue } from "@chakra-ui/react";
import { MdDoubleArrow } from "react-icons/md";

export function ST() {

  const isWideVersion = useBreakpointValue({
    base:false,
    lg:true
  })

  return (
    <Container w="100%" maxWidth="1220px" pt={{base:200, md:200,lg:200, xl:200}} pb={0}>
      <Center flexDirection={"column"} gap={'1.5rem'}>
      <Text align="center" color="bg" fontSize={{base:'lg',md: '3xl', lg:'2xl'}} fontWeight={"bold"}>
      Estima-se que 90,8% das pessoas procrastinam por desorganização, ansiedade, baixo autocontrole, distração e perfeccionismo…
        </Text>
        <Text align="center" color="bg" fontSize={{base:'lg',md: '3xl', lg:'2xl'}} fontWeight={"bold"}>
          Também encontramos pessoas que tiveram pais rígidos, controladores,
          com expectativas muito altas em relação aos filhos...
        </Text>
       
      </Center>

      <Flex pt={10} pb={5} align="center" direction={{base:'column', lg:'row'}} justify="space-between" gap={6}>


        <Text color="bg" fontSize={{base:'lg',md: '3xl', lg:'2xl'}} fontWeight={"bold"}>
          Você já se pegou se culpando por não ter feito determinada tarefa, não
          ter conseguido alcançar uma meta que você gostaria de ter cumprido,
          não ter começado aquele hábito que melhoraria seu desempenho no
          trabalho ou estudos?
        </Text>
        {isWideVersion && <MdDoubleArrow fontSize={200} color="3A555F" />}
        <Text color="bg" fontSize={{base:'lg',md: '3xl', lg:'2xl'}}>
          Isso é porque você não tem um método, não tem uma ferramenta para te
          auxiliar na jornada, para te dar clareza do que deve ser feito, que te
          recompense, te mostre progresso nos seus sonhos a cada passo que você
          dá.
        </Text>
      </Flex>
    </Container>
  );
}
