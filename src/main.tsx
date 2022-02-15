import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { createServer, Model } from 'miragejs'

createServer({
  models:{
    transaction: Model
  },
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento web',
          amount: 3500,
          type: 'deposit',
          category: 'dev',
          createdAt: new Date('2022-01-20T03:24:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 1000,
          type: 'withdraw',
          category: 'casa',
          createdAt: new Date('2022-02-01T03:24:00')
        },
        {
          id: 3,
          title: 'Supermercado',
          amount: 300,
          type: 'withdraw',
          category: 'compras',
          createdAt: new Date('2022-02-05T03:24:00')
        }
      ]
    })
  },
  routes(){
    this.namespace = 'api'

    this.get('/transactions', (schema) => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })

    this.delete('/transactions/:id', (schema, request) => {
      const id = request.params.id
      return schema.find('transaction', id)?.destroy()
    })
  }
})



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
