import React, { useState } from 'react';
import DriverForm from '../artist-form/DriverForm';
import DriverList from '../artist-list/DriverList';
import './Artista.css'

const Artista = () => {
  const [drivers, setDrivers] = useState([])
  return (
    <div className = "driver-content">
      <h1>Artists</h1>
      <div className="form-content">
        <DriverForm setDrivers = {setDrivers} drivers = {drivers}/>
        <div className="inputpage">
         <DriverList drivers = { drivers}/>
        </div>
      </div>
    </div>
  )
}

export default Artista
