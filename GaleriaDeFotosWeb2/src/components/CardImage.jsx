import { Link } from 'react-router-dom'

import Proptypes from 'prop-types'

const CardImage = ({id,image}) => {
  return (
    <Link to={`/photo/${id}`} className='w-[200px] h-[200px] border-black p-2 border-2'>
        <img src={image} className='w-full h-full' />
    </Link>
  )
}

export default CardImage

CardImage.propTypes = {
    id: Proptypes.string.isRequired,
    image: Proptypes.string.isRequired
}