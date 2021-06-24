import React, { Fragment } from "react";
import '../index.css';


const Frase = ({fraseCero,fraseUno,fraseDos,fraseTres,fraseCuatro,fraseCinco,cargarPreparacion,preparacion }) => {
  
   // console.log(frase);
   
   const  elegido = props => {
    cargarPreparacion(props.strInstructionsIT)
  }
 
    

 

    return ( 
  <Fragment >
  

    {/* --------------------cero------------ */}
    <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mx-5 mt-2">
       <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={fraseCero.strDrinkThumb} alt="Woman's Face"/>
       <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {fraseCero.strDrink}
              
            </p>
            <p className="text-lg text-black font-semibold"> Ingredientes  
              {fraseCero.strIngredient1} -
              {fraseCero.strIngredient2} -
              {fraseCero.strIngredient3}
            </p>
          </div>
          <button  className="px-4 py-1 text-sm text-gray-900 font-semibold rounded-full border-2 border-gray-600 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-400  focus:ring-offset-2"
           onClick= { () => elegido(fraseCero)}>Preparación</button>
        </div>
    </div>
    {/* // -------------------uno--------------------------- */}
    <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mx-5 mt-2">
       <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={fraseUno.strDrinkThumb} alt="Woman's Face"/>
       <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">   {fraseUno.strDrink}       </p>
            
            <p className="text-lg text-black font-semibold"> Ingredientes :  
             
             {fraseUno.strIngredient1} - 
             {fraseUno.strIngredient2} -
             {fraseUno.strIngredient3}
           </p>
          </div>
          <button className="px-4 py-1 text-sm text-gray-900 font-semibold rounded-full border-2 border-gray-600 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-400  focus:ring-offset-2"
          onClick= { () => elegido(fraseUno)}>Preparación</button>
        </div>
    </div>
    {/* //----------------dos---------------------------------- */}
   <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mx-5 mt-2">
       <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={fraseDos.strDrinkThumb} alt="Woman's Face"/>
       <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {fraseDos.strDrink}
            </p>
            <p className="text-lg text-black font-semibold"> Ingredientes :  
             
             {fraseDos.strIngredient1} - 
             {fraseDos.strIngredient2} -
             {fraseDos.strIngredient3}
           </p>
          </div>
          <button className="px-4 py-1 text-sm text-gray-900 font-semibold rounded-full border-2 border-gray-600 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-400  focus:ring-offset-2"
          onClick= { () => elegido(fraseDos)}>Preparación</button>
        </div>
    </div> 
    {/* //----------------tres---------------------------------- */}
    <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mx-5 mt-2">
       <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={fraseTres.strDrinkThumb} alt="Woman's Face"/>
       <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {fraseTres.strDrink}
            </p>
            <p className="text-lg text-black font-semibold"> Ingredientes :  
             
             {fraseTres.strIngredient1} - 
             {fraseTres.strIngredient2} -
             {fraseTres.strIngredient3}
           </p>
          </div>
          <button className="px-4 py-1 text-sm text-gray-900 font-semibold rounded-full border-2 border-gray-600 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-400  focus:ring-offset-2"
         onClick= { () => elegido(fraseTres)}>Preparación</button>
        </div>
    </div>
    {/* //----------------cuatro---------------------------- */}
    <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mx-5 mt-2">
       <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={fraseCuatro.strDrinkThumb} alt="Woman's Face"/>
       <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {fraseCuatro.strDrink}
            </p>
            <p className="text-lg text-black font-semibold"> Ingredientes :  
             
             {fraseCuatro.strIngredient1} - 
             {fraseCuatro.strIngredient2} -
             {fraseCuatro.strIngredient3}
           </p>
          </div>
          <button className="px-4 py-1 text-sm text-gray-900 font-semibold rounded-full border-2 border-gray-600 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-400  focus:ring-offset-2"
          onClick= { () => elegido(fraseCuatro)}>Preparación</button>
        </div>
    </div>
    {/* //------------------------------------------------ */}
    <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mx-5 mt-2">
       <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={fraseCinco.strDrinkThumb} alt="Woman's Face"/>
       <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {fraseCinco.strDrink}
            </p>
            <p className="text-lg text-black font-semibold"> Ingredientes :  
             
             {fraseCinco.strIngredient1} - 
             {fraseCinco.strIngredient2} -
             {fraseCinco.strIngredient3}
           </p>
          </div>
          <button className="px-4 py-1 text-sm text-gray-900 font-semibold rounded-full border-2 border-gray-600 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-400  focus:ring-offset-2"onClick= { () => elegido(fraseCinco)}>Preparación</button>
        </div>
    </div>
 
   
    

    
   
   
    </Fragment>
  
     
         
            
  
     
     );
}
 
export default Frase;