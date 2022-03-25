import {Image, Box, Text, Container, Flex} from "@chakra-ui/react";

import LogoImg from "../../assets/logo.png";



export function HeaderUpsell() {
  return (
    <Container maxW="1220px">
      <Box bg="transparent" w="100%" h={{base: '300px', md: "450px", lg:"350"}} >

        
      <Flex 

        align="center"
        justify="center"
        direction="column"
        gap="20px"
        pt={10}
        >
        <Image src={LogoImg} maxWidth={{base: 150, md:250, lg:200}} maxH={{base: 200, md: 100, lg:250}} />
        <Text as="h1"fontSize={{base:19,lg:'45px'}} textAlign="center" fontWeight="bold" color="#FFF"> E para você que tem um projeto ou uma empresa...</Text>
        <Text bg="#25d366" pl={10} pr={10} borderRadius={5} fontSize={{base:19,lg:'45px'}} textAlign="center" fontWeight="bold" color="#FFF">ASSISTA ESTE VÍDEO!</Text>
      </Flex>


    </Box>
    </Container>
  );
}