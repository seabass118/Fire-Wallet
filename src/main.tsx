import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
    brand: {
      "orange": '#FF5500',
    },
}

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
)
