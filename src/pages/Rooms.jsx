import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => {
 return (
  <>
   <Hero hero='roomsHero'>
    <Banner
     title='Pokoje do wynajęcia'
     subtitle='best rooms starting in Wroclaw city'
    >
     {' '}
     <Link to='/' className='btn-primary'>
      Back to Home
     </Link>
    </Banner>
   </Hero>
   <RoomContainer />
  </>
 );
};

export default Rooms;
