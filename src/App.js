import React ,{ useState,useEffect, Fragment}from 'react';
import bebida1 from './images/bebida1.jpg';
import bebida2 from './images/bebida2.jpg';
import Traducir from './components/Traducir';
import Frase from './components/Frase';
import Encabezado from './components/Encabezado';
import './index.css';



function App () {
 

  const [preparacion,cargarPreparacion]=useState([]);
 
  
  
  

  const [frase, setFrase] = useState([]);
  
   
  
  

  const url= "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
  
 
  const consultarAPI = async () => {
    try{
    
  

    const api = await fetch(url);
    //console.log(api);
   
    const frases = await api.json();
    const frase=frases.drinks;
    
   
    setFrase(frase);
    
   console.log(frase);
   

   
   
    }
    catch (error){
      console.log(error);
    }
   
 
   }
   
    useEffect(() =>{
         consultarAPI();
         
        
       },[]);
       
             

  
    
  
  
  return (
    <Fragment >
      <div > 
      <ul >
        <li>
        <Encabezado
        /* letra={letra}
        actualizarLetra={actualizarLetra} */
        bebida1={bebida1}
        bebida2={bebida2}
            
            />
        </li>
    
        
        <li class="flex justify-center  ">
          <div  className="container
         text-center  bg-blue-400 hover:bg-blue-200  border-2 rounded mx-30 mt-1 border-blue-500 " >
            <Traducir
           
            preparacion={preparacion}
            cargarPreparacion={cargarPreparacion}
            />
          </div> 
        </li>
     
        <li class="flex justify-center  gap-8 mt-1"> 
           <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-2  "> 
           {frase.map(fra => (
              <Frase 
                key = {fra.idDrink}
                strDrinkThumb = {fra.strDrinkThumb}
                strDrink = {fra.strDrink}
                strIngredient1={fra.strIngredient1}
                strIngredient2={fra.strIngredient2}
                strIngredient3={fra.strIngredient3}
                strInstructionsIT={fra.strInstructionsIT}
                cargarPreparacion={cargarPreparacion}
                preparacion={preparacion}

                
                id={fra.idDrink}
                
              />
            ))}
              
            </div>
        </li>   
    </ul> 
    </div>   
    </Fragment>
 
  );
  }  
  export default App;  
  