import { useEffect } from 'react'
import {HeaderUpsell} from '../components/HeaderUpsell'
import {CTAUpsell} from '../components/CTAUpsell'
import {Box} from '@chakra-ui/react'



export function Upsell1(){
  let nextUpsellURL = "";
  let nextDownsellURL = "";

  const scriptKiwify = resourceUrl =>{
    useEffect(()=>{
      const script = document.createElement('script');
      script.src = resourceUrl;
      script.async = true;
      document.body.appendChild(script);
    return () =>{
      document.body.appendChild(script)
    }
    }, [resourceUrl])
  }

  scriptKiwify("https://kiwify-snippets.netlify.app/upsell/upsell.min.js")

  return(
    <Box bg="bg" h="100vh">
      <HeaderUpsell/>
      <CTAUpsell/>
    </Box>
  );
}