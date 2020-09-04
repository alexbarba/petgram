import React from 'react'
import ReactDOM from 'react-dom'
// Utilidad que nos permite inicializar nuestra conexión con un servidor de Apollo muy rápidamente y sin configuración
import ApolloClient from 'apollo-boost'
// Integración de Apollo con React, ApolloProvider nos permite envolver toda nuestra aplicacion para poder usar apollo en todo el arbol de elementos
import { ApolloProvider } from 'react-apollo'
import Context from './Context'

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-alexbarba.vercel.app/graphql',
  // request se va a ejecutar justo antes de hacer cualquier peticion al servidor
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
