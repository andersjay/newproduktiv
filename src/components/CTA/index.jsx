import { useState } from 'react'
import { Stack,Container, Center, Text } from "@chakra-ui/react";
import { Button } from "../Button";
import { Video } from "./Video";



export function CTA() {


  const [delay, setDelay] = useState(120000) // 120000 Delay in milliseconds 

  function decrementDelay() {
    var decrement = delay - 1000;

    setDelay(decrement);

  }
  function myfunc(){
    var interval = setTimeout(decrementDelay, 1000)
    
    if(delay === 0){
      clearTimeout(interval)
    }
  }
  myfunc()
  
  return (
    <Container maxWidth={1220}>
      <Stack direction="column">
      <Video />
      <Center>
       {delay == 0 ? (
        <Button mt={1} bg="white" 
        color="bg"
        hover={{ background: 'transparent',
          outline: '2px solid #FFF',
          color:'#FFF',
          borderRadius:'5px'}}
          href="https://pay.kiwify.com.br/pkdf039"
          > Adquirir agora! </Button>
        ) :   <Button
        isLoading
        loadingText='Assista o vídeo'
        colorScheme='teal'
        variant='outline'
        spinnerPlacement='start'

      />
}
      </Center>
    </Stack>

    </Container>
  );
}
