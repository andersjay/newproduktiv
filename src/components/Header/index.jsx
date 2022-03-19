import {Image, Box, Center, Text, Container} from "@chakra-ui/react";

import LogoImg from "../../assets/logo.png";
import Wave from "react-wavify";
import styled from "@emotion/styled";

const WaveContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -5px;
  height: ${(props) => props.level + "vh"};
  display: flex;
  z-index: -1;
  transform: rotate(180deg);
`;

export function Header() {
  return (
    <Container maxW="90%">
      <Box bg="transparent" w="100%" h={{base: '500px', md: "450px", lg:"600px"}}>
       <WaveContainer level={85}>
        <Wave
          fill="#3A555F"
          paused={false}
          options={{
            height:10,
            amplitude: 20,
            speed: 0.4,
            points: 2,
          }}
        />
      </WaveContainer>
        
      <Center>
        <Image src={LogoImg} maxWidth={{base: 350, md:250, lg:350}} maxH={{base: 200, md: 100, lg:250}} />
      </Center>

        <Center >
          <Text as="h1" fontSize={{base:25,lg:55}} textAlign="center" fontWeight="bold" color="#FFF"> Estima-se que 90,8% das pessoas procrastinam por desorganização, ansiedade, baixo autocontrole, distração e perfeccionismo… </Text>
        </Center>
      
    </Box>
    </Container>
  );
}
