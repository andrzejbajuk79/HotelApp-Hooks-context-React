import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {Loading} from './Loading';
import {withRoomConsumer} from '../context';

//to samo  z HOC  check context.jsx
function RoomContainer(props) {
 const {loading, sortedRooms, rooms} = props.context;
 if (loading) {
  return <Loading />;
 }
 return (
  <>
   <RoomFilter rooms={rooms} />
   <RoomList rooms={sortedRooms} />
  </>
 );
}
export default withRoomConsumer(RoomContainer);

//przy uzyciu komponentu funkcyjnego i render props

// import React from 'react';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import {Loading} from './Loading';
// import {RoomConsumer} from '../context';

// const RoomContainer = () => {
//  return (
//   <RoomConsumer>
//    {(value) => {
//     const {loading, sortedRooms, rooms} = value;
//     if (loading) {
//      return <Loading />;
//     }
//     return (
//      <div>
//       hello from rooms container
//       <RoomFilter rooms={rooms} />
//       <RoomList rooms={sortedRooms} />
//      </div>
//     );
//    }}
//   </RoomConsumer>
//  );
// };

// export default RoomContainer;
