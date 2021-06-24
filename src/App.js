import React ,{ useState,useEffect, Fragment}from 'react';
import bebida1 from './images/bebida1.jpg';
import bebida2 from './images/bebida2.jpg';
import Traducir from './components/Traducir';
import Frase from './components/Frase';
import Encabezado from './components/Encabezado';
import './index.css';



function App () {
 // const [letra, actualizarLetra] = useState ([]);

 // const [traducciones,cargarTraduccion]= useState([]);
  


  const [preparacion,cargarPreparacion]=useState([]);
 
  
  
  // const nuevasFrases = frase.filter(elegidas => frase.id ===1);
  // cargarElegida (nuevasFrases);


  //const [frase, setFrase] = useState({});
  const [fraseCero,setFrase0]= useState({});
    const [fraseUno,setFrase1]= useState({});
    const [fraseDos,setFrase2]=useState({});
    const [fraseTres,setFrase3]= useState({});
    const [fraseCuatro,setFrase4]=useState({});
    const [fraseCinco,setFrase5]=useState({});
  
   
  
  

  const url= "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
  
 
  const consultarAPI = async () => {
    try{
    
  

    const api = await fetch(url);
    //console.log(api);
   
    const frases = await api.json();
    const frase=frases.drinks;
   
    
    setFrase0(frase[0]);
   setFrase1(frase[1]);
   setFrase2(frase[2]);
   setFrase3(frase[3]);
   setFrase4(frase[4]);
   setFrase5(frase[5]);
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
           /*  traducciones={traducciones}
            cargarTraduccion={cargarTraduccion} */
            preparacion={preparacion}
            cargarPreparacion={cargarPreparacion}
            />
          </div> 
        </li>
     
        <li class="flex justify-center  gap-8 mt-1"> 
           <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-2  "> 
              <Frase
                fraseCero={fraseCero}
                fraseUno={fraseUno}
                fraseDos={fraseDos}
                fraseTres={fraseTres}
                fraseCuatro={fraseCuatro}
                fraseCinco={fraseCinco}
                cargarPreparacion={cargarPreparacion}
                preparacion={preparacion}
                /> 
            </div>
        </li>   
    </ul> 
    </div>   
    </Fragment>
 
  );
  }  
  export default App;  
  