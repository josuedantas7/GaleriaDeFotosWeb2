import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardPrimario from './components/CardPrimario'

function App() {

  const [dados,setDados] = useState(null)

  function getDados(){
    axios.get('https://jsonplaceholder.typicode.com/albums').then((response) => {
      setDados(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getDados()
  },[])


  return (
    <div className='border-2 border-black w-full h-full'>
      <div className='px-8 flex flex-col justify-center items-center'>
        {dados && dados.map((item) => {
          return <CardPrimario id={item.id} key={item.id} title={item.title}/>
        })}
      </div>
    </div>
  )
}

export default App
