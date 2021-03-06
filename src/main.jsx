import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  bg: '#3A555F',
  main:'#1D2021',

}

const styles = {
  global:(props)=>({
    'html, body':{
      overflowX: 'hidden',
    }
  })
}


const theme = extendTheme({ colors, styles })


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
