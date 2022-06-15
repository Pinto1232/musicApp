import React from 'react'
import './App.css'
import Layout from './layout/Layout'
import Roteator from './roteator/Roteator'


function App() {

  return (
    <div className="bg-black-color">
      <Layout>
          <Roteator />
        </Layout>
    </div>
  )
}

export default App
