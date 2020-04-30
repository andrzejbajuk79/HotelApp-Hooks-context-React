import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from './Title';

// get unige values for roomType items to pokoje, value to kryterium
const getUnique = (items, value) => {
  return [...new Set (items.map (item => item[value]))];
};

function RoomFilter({rooms}) {
  //Mozna uzyc HOC, render props  jak w roomContainer albo USECONTEXT
  const context = useContext (RoomContext);

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  //get uniqye types
  let types = getUnique (rooms, 'type');
  //add all
  types = ['all', ...types];
  //map to jsx
  types = types.map ((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  //get uniqye number of people
  let people = getUnique (rooms, 'capacity');
  people = people.map ((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="Szukaj pokoju" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Rodzaj </label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}
        {/* room price  */}
        <div className="form-group">
          <label htmlFor="price">
            Cena pokoju ${price}
          </label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price */}
      </form>
    </section>
  );
}

export default RoomFilter;
