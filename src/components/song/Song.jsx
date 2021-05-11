import React, { useState } from 'react'
import CarForm from '../song-form/CarForm';
import CarList from '../song-list/CarList';
import './Song.css'

const Song = () => {
  const [cars, setCars] = useState([])

  return (
    <div className="car-content">
      <h1>Songs</h1>
      <div className="form-content">
        <CarForm setCars = { setCars } cars = {cars}/>
        <div className="inputpage">
         <CarList cars= { cars }/>
        </div>
      </div>
    </div>
  )
}

export default Song
