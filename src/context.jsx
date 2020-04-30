import React, {Component} from 'react';
import items from './data';
const RoomContext = React.createContext ();
//

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    //
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  //getData
  componentDidMount () {
    let rooms = this.formatData (items);
    let featuredRooms = rooms.filter (room => room.featured === true);
    let maxPrice = Math.max (...rooms.map (item => item.price));
    let maxSize = Math.max (...rooms.map (item => item.size));
    this.setState ({
      rooms, //
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
    // console.log (featuredRooms);
  }
  formatData (items) {
    let tempItems = items.map (item => {
      let id = item.sys.id;
      let images = item.fields.images.map (image => image.fields.file.url);
      let room = {...item.fields, images, id};
      return room;
    });
    return tempItems;
  }
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    //filter byz zwrocilo tabele a find zwroci nam tylko 1 obiekt
    let room = tempRooms.find (room => room.slug === slug);
    return room;
  };
  handleChange = event => {
    const target = event.target;
    const value = event.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;

    this.setState (
      {
        [name]: value,
      },
      this.filterRooms
    );

    const type1 = event.target.type;
    const name1 = event.target.name;
    const value1 = event.target.value;

    // console.log(
    //  `this is type ${type1}, this is name ${name1},this is value ${value1}`
    // );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;
    //all the rooms
    let tempRooms = [...rooms];

    //transform values
    capacity = parseInt (capacity);
    price = parseInt (price);

    //fillter by type
    if (type !== 'all') {
      tempRooms = tempRooms.filter (room => room.type === type);
    }
    //fillter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter (room => room.capacity >= capacity);
    }
    //fillter by price
    tempRooms = tempRooms.filter (room => room.price <= price);

    this.setState ({sortedRooms: tempRooms});
  };

  render () {
    // console.log (this.state);
    return (
      <RoomContext.Provider
        value={{
          ...this.state, //
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer (Component) {
  return function ConsumerWrapper (props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} /> //
        }
      </RoomConsumer>
    );
  };
}
export {RoomProvider, RoomConsumer, RoomContext};
