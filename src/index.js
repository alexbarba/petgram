import React from 'react'
import ReactDOM from 'react-dom'
// Utilidad que nos permite inicializar nuestra conexión con un servidor de Apollo muy rápidamente y sin configuración
import ApolloClient from 'apollo-boost'
// Integración de Apollo con React, ApolloProvider nos permite envolver toda nuestra aplicacion para poder usar apollo en todo el arbol de elementos
import { ApolloProvider } from 'react-apollo'
import Context from './Context'

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-alexbarba.vercel.app/graphql'
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
