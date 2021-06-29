import React, { Fragment } from 'react';

const Encabezado = ({bebida1,bebida2}) => {
  // Creamos el state error
// para validar las entradas del formulario

/* const [error, actualizarError] = useState (false);

// Esta handleChange (se acostumbra a poner así, handleLoquevenga) es para
// leer los datos a medida que el usuario escribe
// en lo campos del form. Así vamos validando en tiempo real
const handleChange =(props) => {
  actualizarLetra(props) }
  
 */



// Cuando se envía el formulario se juega todo esto.

/* onst submitLetra = (e) => {
    e.preventDefault();
    // Esta prevent es para que no tire error porque al pcipio. están los campos vacíos.

    // Validar

    if (letra.trim() === ""  ){
        console.log("Tenés que colocar solo una letra");
        actualizarError(true);
        return;
         }

    // Eliminar mensaje error
    actualizarError(false);

    //ojo
    const handleChange =(props) => {
      actualizarLetra(props) }
        
       */
      // Reiniciar el form
     
  
    return ( 
        <Fragment>
          <div class="flex ">
          <div className="container grid grid-cols-3 h-34 items-center aling-center
            text-center font-bold text-2xl bg-blue-400 hover:bg-blue-200  border-2 rounded  border-blue-500">
          <img src={bebida2} className="w-60 h-32 rounded-full mx-auto border border-purple-200 hover:border-transparent focus:outline-none "  alt="" width="384" height="600"/>
             
          
         
               
             <p class="text-4xl ">Cocktail</p>
             
             <img src={bebida1} className="w-60 h-32 rounded-full mx-auto border border-purple-200 hover:border-transparent focus:outline-none "  alt="" width="384" height="600"/>
             </div>
           </div>  

             {/* <li class="flex justify-center mt-2">
             <div className="container 
            text-center text-xl bg-blue-400 hover:bg-blue-200  border-2 rounded  border-blue-500">
               
            Preparacion de Cocktail elegido 
             </div>
            </li> */}

            {/* //<div className="grid grid"> */}
        
              
                {/* <label class="text-pink-500 grid grid-rows-1 ">ngrese una letra y obtenga los cocktails que empieza con ella</label> */}
                 {/*  <input 
                  
                  type="text"
                  name="letra"
                  value={letra}
                  placeholder="Ingresar Letra"
                  class="bg-gray-300 hover:bg-gray-100  border-2 rounded "
                  onChange={handleChange}
                  /> */}
                  
                
                  
                
           
       
          
        

        </Fragment>
     );
}
 
export default Encabezado;
