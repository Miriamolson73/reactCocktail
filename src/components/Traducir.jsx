import React, { Fragment } from "react";
import '../index.css';






const Traducir = ({preparacion}) => {
      const eleccion=preparacion;
      
      
      console.log(preparacion);
      
    return ( 
        <Fragment >
          <div >
            {preparacion.length === 0 
            ?  (<p className="h-20  text-center font-bold text-xl bg-gray-400 hover:bg-gray-200  border-2 rounded  border-gray-900">
           Seleccionar cocktail para ver preparación</p>)
            
             :
             (
            
             <div className="h-20  text-center font-bold text-xl bg-gray-400 hover:bg-gray-200  border-2 rounded  border-gray-900">
            PREPARACIÓN :
            {eleccion}
            </div>
             )
          

         
          }        
         
            </div> 
  
        </Fragment>
     );
}
 
export default Traducir;