import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './HomePage.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import ListaPeliculasBusqueda from '../ListaPeliculasBusqueda/ListaPeliculas';
import PeliculasPorVoto from '../BusquedaDePeliculas/PeliculasPorVoto'
import PeliculasPorPopularidad from '../BusquedaDePeliculas/PeliculasPorPopularidad'
import busquedaPorNombre from '../../api/busquedaPorNombre.js'
import PeliculasFavoritas from '../BusquedaDePeliculas/PeliculasFavoritas'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function HomePage(){

  const [valor, setValor] = useState('');
  const [peliculas, setPeliculas] = useState([])

  const cambiarValor = (event) => {
    setValor(event.target.value);
  }

  const buscarPelicula = () => {
    busquedaPorNombre(valor)
      .then(res => {        
        setPeliculas(res.data.results);
      })
  }

  return (
    <Router>        
      <div className="cabecera">
          <img src={logo} className='logo'/>
          <Link to="/cerrarSesion">
            <button className='botonesMenu'>Cerrar sesión</button>
          </Link>
          <Link to="/myFavourites">
            <button className='botonesMenu'>My favourites</button>          
          </Link>
          <Link to="/">
            <button className='botonesMenu'>Home</button>
          </Link>
          <Link to='/buscarPelicula' onClick={buscarPelicula}>
              <FontAwesomeIcon icon={faSearch} className='botonesMenu icono'/>              
          </Link>
          <input type="text" onChange={cambiarValor} className="botonesMenu buscador" placeholder="Search a movie" value={valor}></input>
              
          
          <Switch>
            <Route path="/myFavourites">
              <PeliculasFavoritas titulo={"Favourites movies:"}/>
            </Route>

            <Route path='/buscarPelicula'>                                                          
              <ListaPeliculasBusqueda pelicula={valor} titulo={"Resultados de buscar "} listaPeliculas={peliculas} />
            </Route>
            
            <Route path='/'>
              <PeliculasPorVoto titulo={"Trending topic "} />
              <PeliculasPorPopularidad titulo={"Most popular"}/>
            </Route>

            <h1></h1>
          </Switch>
          
          
      </div>        
    </Router>
  );       
}
  
  
export default HomePage;
  