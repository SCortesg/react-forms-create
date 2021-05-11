import React from 'react'
import { useForm } from 'react-hook-form';
import './carform.css';

const CarForm = ({setCars, cars}) => {
  // const [ data, setData ] = useState({
  //   marca: '',
  //   modelo: '',
  //   cilindraje: 0
  // });

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // const handleInputChange = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value
  //   })
  // }
  
  const sendData = (data,e) => {
    e.preventDefault();
    data.id = Date.now();
    setCars([...cars,data])
    e.target.reset();
  } 

  return (
    <>
      <form className = "car-form" onSubmit = { handleSubmit(sendData) }>
        <div className="row">
          <label id = "marca">Nombre</label>
          <div className="input">
            <input 
              type = "text"
              placeholder = "Enter song name"
              name = "marca"
              // onChange = { handleInputChange }
              {...register("marca", { required: true, maxLength: 15 })}
            />
            {errors.marca && <span>This field is required</span>}
          </div>
          </div>
        <div className="row">
          <label id = "modelo">Artista</label>
          <div className="input">
            <input 
              type="text"
              placeholder = "Enter artist name"  
              name = "modelo"
              // onChange = { handleInputChange }
              {...register("modelo", { required: true, maxLength: 15 })}
            />
            {errors.modelo && <span>This field is required</span>}
          </div>
        </div>
        <div className="row">
          <label id="cilindraje">Duracion</label>
          <div className="input">
            <input 
              type="number"
              placeholder = "Enter duration in seg"  
              name = "cilindraje"
              // onChange = { handleInputChange }
              {...register("cilindraje", { required: true,  min: 1, max: 5000 })}
            />
            {errors.cilindraje && <span>Invalid value</span>}
          </div>
        </div>
        <div className="button">
          <button>
            Agregar
          </button>
        </div>
      </form>
    </>
  )
}

export default CarForm
