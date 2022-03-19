import { useState } from 'react'
import { Stack,Container, Center } from "@chakra-ui/react";
import { Button } from "../Button";
import { Video } from "./Video";



export function CTA() {


  const [delay, setDelay] = useState(120000) // Delay in milliseconds 

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
        <Button mt={4} bg="#3A555F" hover={{ background: 'transparent',
        outline: '2px solid #3A555F',
        color:'#3A555F',}}> Compra ai cara</Button>
        ) : ""}
      </Center>
    </Stack>

    </Container>
  );
}
