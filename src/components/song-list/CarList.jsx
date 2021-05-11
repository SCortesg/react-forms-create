import React from 'react'
import './car-list.css'

const CarList = ({cars = [{
  id: '',
  marca: '',
  modelo: '',
  cilindraje: 0
}]}) => {

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="head">
            <th>Nombre</th>
            <th>Artista</th>
            <th>Duracion/S</th>
          </tr>
        </thead>
        <tbody>
            { cars.map( car => (
              <tr 
                key = {car.id}
                className="table-row"  
              >
                <td>{car.marca}</td>
                <td>{car.modelo}</td>
                <td>{car.cilindraje}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default CarList
