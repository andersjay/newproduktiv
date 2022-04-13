import {
  Badge,
  Container,
  Flex,
  Text,
  List,
  ListItem,
  ListIcon,
  Center,
  Image,
} from "@chakra-ui/react";
import { Button } from "../Button";

export function End() {
  return (
    <Container w="100%" maxW={1120}>
      <Flex direction="column" align="center" gap={10} pb={20} pt={20}>
        <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight={"bold"}>
          A decisão agora está em suas mãos
        </Text>

        <Text fontSize={{ base: "lg", lg: "2xl" }}  fontWeight={"bold"}>
          Nesse momento você tem duas escolhas:
        </Text>

        <Text fontSize={{ base: "lg", lg: "2xl" }}>
          A primeira é você fechar essa página e esquecer o que viu aqui hoje.
          Muito provavelmente você continuará procrastinando, ansioso(a), sendo
          desorganizado(a), improdutivo(a), travando seu próprio potencial,
          perdendo tempo e deixando os sonhos passarem por não conseguir
          realizar as tarefas e metas
        </Text>

        <Text fontSize={{ base: "lg", lg: "2xl" }}>Ou</Text>

        <Text fontSize={{ base: "lg", lg: "2xl" }} pb={5}>
        A segunda escolha, que é você garantir o <b>Método P</b> por menos de <b>R$0,27 por dia</b> e ter acesso ao melhor conteúdo de organização, produtividade e gerenciamento de tarefas, economizando o tempo e o dinheiro que você perderia tentando encontrar o melhor caminho. Espero que você faça a melhor escolha!
        </Text>
        <Button
          color="white"
          mt={10}
          mb={10}
          h="80px"
          hover={{
            background: "transparent",
            outline: "2px solid #1D2021",
            color: "main",
          }}
          bg="main"
          href="https://pay.kiwify.com.br/pkdf039"
        >
         Quero fazer a escolha certa
        </Button>
      </Flex>
    </Container>
  );
}
