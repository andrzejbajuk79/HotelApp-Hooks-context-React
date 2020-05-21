import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
 return (
  <>
   <Hero>
    <Banner title='Luksusowe Pokoje' subtitle='deluxe rooms starting at $35.99'>
     {' '}
     <Link to='rooms' className='btn-primary'>
      Znajdz swoje miejsce!!
     </Link>
    </Banner>
   </Hero>
   <Services />
   <FeaturedRooms />
  </>
 );
};

export default Home;
