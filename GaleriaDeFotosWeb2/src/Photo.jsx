import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useNavigate, useParams } from 'react-router-dom'

const Photo = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const [photo,setPhoto] = useState({})

    function redirect(){
        navigate(-1)
    }

    function getPhoto(){
        axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`).then(res => {
            setPhoto(res.data)
        })
    }

    useEffect(() => {
        getPhoto()
    },[])


  return (
    <div>
        <button onClick={() => redirect()} className='px-2 border-2'>Voltar</button>
        <h1 className='my-4'>{photo.title}</h1>
        <img src={photo.url} className='w-[600px] h-[600px]' alt="" />
    </div>
  )
}

export default Photo
