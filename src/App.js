import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Inicio from './components/Inicio';
import ListarProductos from './components/ListarProductos.js';
import AgregarProducto from './components/AgregarProducto';
import Navegacion from './components/common/Navegacion';
import Footer from './components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react' ;
import EditarProducto from './components/EditarProducto.js';


function App() {
  const [productos, setProductos] = useState([]);
  const URL = process.env.REACT_APP_API_URL
  useEffect(()=>{
    //llamar a la api
    consultarAPI();
  },[]);

  const consultarAPI = async() =>{
    try{
      const respuesta = await fetch(URL)
      const informacion = await respuesta.json();
      console.log(informacion);
      if(respuesta.status === 200){
        setProductos(informacion)
      }
      
    
    }catch(error){
      console.log(error);
      //mostrar un cartel al usuario que lo intente en unos minutos
    }
  }
 
  return (
   <Router>
     <Navegacion></Navegacion>
     <Switch>
       <Route exact path='/'>
         <Inicio></Inicio>
       </Route>
       <Route exact path='/productos'>
         <ListarProductos productos={productos} consultarAPI={consultarAPI}></ListarProductos>
       </Route>
       <Route exact path='/productos/nuevo'>
         <AgregarProducto consultarAPI={consultarAPI}></AgregarProducto>
       </Route>
       <Route exact path='/productos/editar/:id'>
         <EditarProducto></EditarProducto>
       </Route>
     </Switch>
     <Footer></Footer>
   </Router>
  );
}

export default App;
