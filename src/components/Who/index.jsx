import {
  Badge,
  Container,
  Flex,
  Text,
  List,
  ListItem,
  ListIcon,
  Center,
  Image
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import notionCompany from '../../assets/notioncompany.png' 

export function Who() {


  return (
    <Container maxWidth="1220px" pt={20} mb="100px" h="100%">
      <Flex align="center" justify="center" gap="3rem">
          <Text fontWeight="bold" fontSize="2xl">
            Isso é para mim?
            <Badge ml="1" colorScheme="green">
              New
            </Badge>
          </Text>
      </Flex>

      <List spacing={10} pt={10}>
        <ListItem fontSize="sm" display={"flex"} alignItems="center">
          <Flex fontSize={{base:16, lg:22}} align="center">
            <ListIcon as={MdCheckCircle} color="green.500" fontSize={{base:"20px",lg:'50px'}} />
            Gosta de organização ou quer aprender do zero como organizar sua
            rotina de maneira saudável e prazerosa (sem se pressionar demais);
          </Flex>
        </ListItem>

        <ListItem fontSize="sm" display={"flex"} alignItems="center">
          <Flex fontSize={{base:16, lg:22}} align="center">
            <ListIcon as={MdCheckCircle} color="green.500" fontSize={{base:"20px",lg:'50px'}} />
            Quer dormir melhor e ter menos preocupações no dia a dia devido a
            sobrecarga de tarefas e informação, prazos e datas, etc;
          </Flex>
        </ListItem>

        <ListItem fontSize="sm" display={"flex"} alignItems="center">
          <Flex fontSize={{base:16, lg:22}} align="center">
            <ListIcon as={MdCheckCircle} color="green.500" fontSize={{base:"20px",lg:'50px'}} />
            Quer criar novos hábitos e se livrar dos hábitos que te fazem
            procrastinar;
          </Flex>
        </ListItem>

        <ListItem fontSize="sm" display={"flex"} alignItems="center">
          <Flex fontSize={{base:16, lg:22}} align="center">
            <ListIcon as={MdCheckCircle} color="green.500" fontSize={{base:"20px",lg:'50px'}} />
            Quer se tornar uma pessoa mais inteligente, ter mais tempo para se
            dedicar ao teu crescimento pessoal usando técnicas eficazes;
          </Flex>
        </ListItem>

        <ListItem fontSize="sm" display={"flex"} alignItems="center">
          <Flex fontSize={{base:16, lg:22}} align="center">
            <ListIcon as={MdCheckCircle} color="green.500" fontSize={{base:"20px",lg:'50px'}} />
            Quer organizar toda a sua empresa e processos para ter mais clareza
            se seus negócios vão prosperar a longo prazo;
          </Flex>
        </ListItem>

        <ListItem fontSize="sm" display={"flex"} alignItems="center">
          <Flex fontSize={{base:16, lg:22}} align="center">
            <ListIcon as={MdCheckCircle} color="green.500" fontSize={{base:"20px",lg:'50px'}} />
            Quer criar metas eficazes e conquistar grande parte delas, usando
            todos os métodos de planejamento diário, semanal, mensal, trimestral
            e anual;
          </Flex>
        </ListItem>

        <ListItem fontSize="sm" display={"flex"} alignItems="center">
          <Flex fontSize={{base:16, lg:22}} align="center">
            <ListIcon as={MdCheckCircle} color="green.500" fontSize={{base:"20px",lg:'50px'}} />
            Quer criar metas eficazes e conquistar grande parte delas, usando
            todos os métodos de planejamento diário, semanal, mensal, trimestral
            e anual;
          </Flex>
        </ListItem>
      </List>

      <Flex p={10} direction="column" justify="center" align="center" mt="40px" fontWeight="bold" fontSize={{base:"20px",lg:'2xl'}} gap="5rem" >
        <Text align='center' >Faça como essas empresas e influenciadores:</Text>
        <Image src={notionCompany}/>
        <Text align='center' >... Figma, Loom, Typeform, Kiwify, muitas outras empresas, youtubers, blogueiros(as) e criadores de conteúdos!</Text>

        <Text align='center' fontWeight="regular" >Além disso, o youtuber e ex-aluno nota 1000 na redação e 988,7 em matemática no Enem, Lucas Felpi, fala sobre como o Notion te ajudou e ajuda até hoje na vida acadêmica, na Universidade de Michigan (EUA).</Text>
        <Text  align='center' fontWeight="regular" >Lucas Felpi já participou de estágio na Amazon, e atualmente faz estágio no Facebook...</Text>
        
      </Flex>
    </Container>
  );
}
