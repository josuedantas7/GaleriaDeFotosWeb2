import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import CardImage from './components/CardImage'

const Album = () => {

    const navigate = useNavigate()

    const [title,setTitle] = useState('')
    const [photos,setPhotos] = useState([])

    const { id } = useParams()

    function getTitle(){
        axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`).then(res => {
            setTitle(res.data.title)
        }).catch(err => {
            console.log(err)
        })
    }

    function getPhotos(){
        axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).then(res => {
            console.log(res.data)
            setPhotos(res.data)
        })
    }

    function redirect(){
        navigate(-1)
    }

    useEffect(() => {
        getTitle()
        getPhotos()
    },[])

    console.log(photos)


  return (
    <div>
      <button onClick={() => redirect()} className='px-2 border-2'>Voltar</button>
      <h1 className='text-2xl font-bold my-4'>{title}</h1>
      <div className='flex flex-wrap gap-2'>
        {photos && photos.map((item) => {
            return <CardImage key={id} id={item.id} image={item.url} />
        })}
      </div>
    </div>
  )
}

export default Album
