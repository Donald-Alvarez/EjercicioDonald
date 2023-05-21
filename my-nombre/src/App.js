//Importamos libreria y la funcion useState.
import React, { useState } from 'react';

//Declaramos la funcion Lista de elementos.
function ListaDeElementos() {
  /*Utilizamos el useState para declarar 3 variabes 
  Nombres, nuevoNombre, letra.
  se declarara el setNombres, setNuevonombre y setNuevaletra
  se declaran como una funcion que actualiza el estado de las variables. */
  const [Nombres, setNombres] = useState([]);
  const [nuevoNombre, setNuevonombre] = useState('');
  const [letra, setNuevaletra] = useState('');

  //Función que maneja la acción de enviar un formulario .
  const handleSubmit = (event) => {
    /*prevenir el comportamiento por defecto de la acción 
    de enviar el formulario, lo cual es re-cargar la página.*/
    event.preventDefault();
    // Elimina todos los espacios en blanco  de la cadena. 
    if (nuevoNombre.trim() !== '') {
      /*setNombres actualiza el estado de la lista Nombres
      con el nuevo nombre agregado por medio del operador de
      propagacion ...Nombres.*/
      setNombres([...Nombres, nuevoNombre]);
      //actualiza el estado del input dejando en blanco una ves enviado el formulario.
      setNuevonombre('');
  
    }
  };
  //Funciones que manejan el estado de cambio de del 
  //valor que contiene input actualizandolo por nuevonombre y nuevaletra. 
  const handleChange = (event) => {
    setNuevonombre(event.target.value);
  };
  const handleChangeLetra = (event) => { 
    setNuevaletra(event.target.value);
  };
  /*Funcion flecha que maneja el conteo de nombres que comiencen con la una letra
  por medio de la variable count.*/
  const contarNombresConLetra = () => {
    let count = 0;
    //Decalaracion de un ciclo forEach
    //se utiliza para iterar cada nombre del arreglo llamado Nombres
    Nombres.forEach((nombre) => {
      //charAt= Obtener priimer letra de cada nombre.
      //Se convierte a minuscula con toLowerCase.
      //si esto coincide con la variable letra se incrementa el contador.
      if (nombre.charAt(0).toLowerCase() === letra.toLowerCase()) {
        count++;
      }
    });
    //retorna el valor count.
    return count;
  };

  return (
    <div className='text-center'>
     <h3>⭐Crea un componente que tome un arreglo de nombres </h3>
     <h3>y muestre la cantidad de nombres que comienzan con una letra específica </h3>
     <h3>ingresada por el usuario. Utiliza una variable de estado para</h3>
     <h3>guardar el arreglo y la letra ingresada.</h3>
      {/* Se llama la funcion quer permite la acion de envio por medio de onSubmit */}
      <form onSubmit={handleSubmit}>
        {/* creamos el input en el cual asiganos un tipo de campo, l
        la validacion del campo y onChange que realiza el cambio de la varible */}
        <input
          type="text"
          placeholder="Nombres"
          value={nuevoNombre}
          onChange={handleChange}
          required
        />
        <button className='btn btn-outline-primary' type="submit">Agregar✅</button>
      </form>
      <p> 
        {/* Utilizamo .map para iterar a través de los elementos dentro 
        de una colección de arreglos(Nombres)
        Se declara el nombre añadido y index que 
        hace la funcion de un identificador unico por medio de key*/}
        {Nombres.map((nombre, index) => (
          <p key={index}>{'✅'+ nombre}</p>
        ))}
      </p>
      <br />
      <h3>
        Ingrese una letra para contar nombres que comienzan con esa letra:
        <br/>
        {/* Aignacion del campo input de en el que se escribira la letra
        para ver cuanto nombres comienzan con dicha letra. */}
        <input 
        type="text" 
        onChange={handleChangeLetra} 
        maxLength="1"/>
        {/* Si la longitud de la matriz Nombres es mayor a cero 
        si la longitud de la letra es mayor a cero entonces se devuelve el elemento. */}
        {Nombres.length > 0 && letra.length > 0 && (
        <h3>
          {/* se devuelve cuantos nombres continen la letra específicacada */}
          Hay {contarNombresConLetra()} nombres con la letra: " {letra} "
        </h3>
         )}
      </h3>
      <br />
    </div>
  );
}

export default ListaDeElementos;




