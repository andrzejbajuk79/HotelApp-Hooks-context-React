import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImg from '../styles/images/room-1.jpeg';

const Room = ({room}) => {
 const {name, slug, images, price} = room;
 return (
  <article className='room'>
   <div className='img-container'>
    <img src={images[0] || defaultImg} alt='single room' />
    <div className='price-top'>
     <h6>{price}PLN </h6>
     <p>za noc</p>
    </div>
    <Link to={`/rooms/${slug}`} className='btn-primary room-link'>
     Features
    </Link>
   </div>
   <p className='room-info'>{name}</p>
  </article>
 );
};

Room.propTypes = {
 room: PropTypes.shape({
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
 }),
};
export default Room;
