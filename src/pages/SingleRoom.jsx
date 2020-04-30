import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {RoomContext} from '../context';
import defaultBcg from '../styles/images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';

class SingleRoom extends Component {
 constructor(props) {
  super(props);
  this.state = {
   slug: this.props.match.params.slug,
   defaultBcg,
  };
 }
 static contextType = RoomContext;

 // componentDidMount () {}
 render() {
  let {getRoom} = this.context;
  const room = getRoom(this.state.slug);
  if (!room) {
   return (
    <div className='error'>
     <h3>no such a room can be found</h3>
     <Link to='/rooms' className='btn-primary'>
      Back to home
     </Link>
     ;
    </div>
   );
  }
  const {
   name,
   description,
   capacity,
   size,
   price,
   extras,
   breakfast,
   pets,
   images,
  } = room;
  const [mainImg, ...defaultImg] = images;
  console.log(defaultImg);

  return (
   <>
    <StyledHero img={mainImg || this.state.defaultBcg}>
     <Banner title={`${name} room`}>
      <Link to='/rooms' className='btn-primary'>
       Back to rooms
      </Link>
     </Banner>{' '}
    </StyledHero>
    <section className='single-room'>
     <div className='single-room-images'>
      {defaultImg.map((item, index) => {
       return <img key={index} src={item} alt={name} />;
      })}
     </div>
     <div className='single-room-info'>
      <article className='desc'>
       <h3>szczegóły</h3>
       <p>{description}</p>
      </article>
      <article className='info'>
       <h3>info</h3>
       <h6>cena: $ {price}</h6>
       <h6>powierzchnia: ${size} m2</h6>
       <h6>
        max liczba osob :{' '}
        {capacity > 1 ? `${capacity} ludzi` : `${capacity} osoba`}
       </h6>
       <h6>{pets ? 'zwierzaki dozwolone' : 'żadnych zwierzaków!!'}</h6>
       <h6>{breakfast && 'darmowe posiłki'} </h6>
      </article>
     </div>
    </section>
    <section className='room-extras'>
     <h6>Dodatki</h6>
     <ul className='extras'>
      {extras.map((item, index) => {
       return <li key={index}>- {item}</li>;
      })}
     </ul>
    </section>
   </>
  );
 }
}

export default SingleRoom;
