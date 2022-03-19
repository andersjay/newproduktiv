import {
  Flex,
  Text,
  Container,
  Divider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { AiFillPushpin } from "react-icons/ai";
export function ST2() {
  return (
    <Container w="100%" maxWidth="1220px" pb={50}>
      <Divider horizontal borderColor={"main"} pt={10} />
      <Flex
        align="center"
        justify="flex-start"
        gap={20}
        direction="column"
        pt={20}
        pb={20}
      >
        <Text color="bg" fontSize="2xl" fontWeight={"bold"}>
          Eu sempre fui uma pessoa que vivia pulando de galho em galho, não
          realizava nada porque eu não via progresso nas coisas. Era uma pessoa
          muito ansiosa, muito imediatista, ou seja, se eu não conseguisse ver
          progresso no que eu estivesse fazendo, parava e ia fazer outra coisa…
        </Text>
        <Text color="bg" fontSize="2xl">
          Meu pai uma vez me disse que eu não iria conseguir nada na vida se
          ficasse com esse pensamento de curto prazo… na hora fiquei muito
          bravo, chateado com a forma que ele me falou aquilo, mas hoje vejo que
          foi para o meu bem,{" "}
          <span style={{ fontWeight: "bold" }}>E ERA VERDADE</span>!
        </Text>

        <Text color="bg" fontSize="2xl">
          Foi questão de 2/3 meses dessa discussão com meu pai, que lendo um
          livro chamado “Se a vida é um jogo… aqui estão as regras”, que eu
          conheci um método de fracionar (quebrar) meus objetivos em pequenas
          etapas, assim, eu conseguiria ver progresso…
        </Text>
        <AiFillPushpin fill="#3A555F" fontSize="50px"/>

        <Text color="bg" fontSize="2xl" textAlign="left">
          Por exemplo: Se eu quero guardar 10 mil reais
        </Text>

        <Text color="bg" fontSize="2xl" textAlign="left">
          Objetivo: Guardar 10 mil reais
        </Text>

        <Table variant="simple" w={20} fontSize={20} >
          <Thead>
            <Tr>
              <Th fontSize="lg" >Etapas</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Guardar R$1.000,00</Td>
            </Tr>

            <Tr>
              <Td>Guardar R$2.500,00</Td>
            </Tr>

            <Tr>
              <Td>Guardar R$5.000,00</Td>
            </Tr>
            <Tr>
              <Td>Guardar R$7.500,00</Td>
            </Tr>

            <Tr>
              <Td>Guardar R$10.000,00</Td>
            </Tr>
          </Tbody>
        </Table>

        <Text color="bg" fontSize="2xl">
        Quando você concluir a primeira etapa, você ficará feliz e conseguirá ver progresso no seu objetivo, que está caminhando certo e conseguirá alcançar.
        </Text>

        <Text color="bg" fontSize="2xl">
        Hoje em dia, sou uma pessoa bem mais organizada, me planejo muito mais e com isso consigo procrastinar menos, mas uma coisa eu já não sou mais… aquele tipo de pessoa que larga as coisas no meio do caminho. Se eu decido que vou começar algo, se eu decido tal objetivo, eu defino as etapas e não paro mais, até conseguir!
        </Text>

        <Text color="bg" fontSize="2xl" fontWeight="bold">
        E acredito que isso realmente pode ajudar muito a sua vida…
        </Text>
      </Flex>
    </Container>
  );
}
