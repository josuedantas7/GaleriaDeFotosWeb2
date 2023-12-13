import React from 'react'

import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'

const CardPrimario = ({id,title}) => {
  return (
    <Link to={`/album/${id}`} className='border-2 border-black w-full h-16 flex items-center mt-2'>
        <h1 className='text-xl font-bold px-5'>{title}</h1>
    </Link>
  )
}

export default CardPrimario


CardPrimario.propTypes = {
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired
}
