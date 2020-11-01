import React, { useState } from 'react'
import './HomePage.css';
import ListaPeliculasBusqueda from '../ListaPeliculasBusqueda/ListaPeliculas';
import PeliculasPorVoto from '../BusquedaDePeliculas/PeliculasPorVoto'
import PeliculasPorPopularidad from '../BusquedaDePeliculas/PeliculasPorPopularidad'
import busquedaPorNombre from '../../api/busquedaPorNombre.js'
import PeliculasFavoritas from '../BusquedaDePeliculas/PeliculasFavoritas'
import Footer from '../Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


/* 
  Trello personal:
  
  Agregar el data mining para que a la última película que le des fav, te tire los parecidos
  
  Agregar video en detalle
  
*/

function HomePage() {

  const [valor, setValor] = useState('');
  const [peliculas, setPeliculas] = useState([])
  const [mostrarFooter, setMostrarFooter] = useState(true);



  const cambiarValor = (event) => {
    setValor(event.target.value);
  }

  const buscarPelicula = () => {
    busquedaPorNombre(valor)
      .then(res => {
        setPeliculas(res.data.results);
        setMostrarFooter(false);
      })
  }

  const abrirFooter = () => {
    setMostrarFooter(true)
  }

  return (
    <Router>

      <div>
        <nav className="navbar navbar-expand-lg navbar-dark elegant-color-dark">

          <Link to="/home" onClick={abrirFooter}>
            <div className="navbar-brand"> MovDev</div>
          </Link>
 
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="basicExampleNav">
            <ul className="navbar-nav mr-auto">
              <Link to="/" onClick={abrirFooter}>
                <li className="nav-item active">
                  <div className="nav-link">Home
                    <span className="sr-only">(current)</span>
                  </div>
                </li>
              </Link>
              <Link to="/myFavourites" onClick={abrirFooter}>
                <li className="nav-item">
                  <div className="nav-link" >Favourites</div>
                </li>
              </Link>              

            </ul>
              <form className="form-inline">
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" value={valor} onChange={cambiarValor}/>
                  <Link to='/buscarPelicula' onClick={buscarPelicula}>
                    <button className="btn btn-outline-white btn-sm my-0" type="submit">Search</button>
                  </Link>
                </div>
              </form>              

          </div>
        </nav>
      </div>

      <div className="body">
        
        <Switch>
          <Route path="/myFavourites">
            <PeliculasFavoritas titulo={"Favourites movies:"} tipoFav={"movies"} />
            <PeliculasFavoritas titulo={"Favourites tv series:"} tipoFav={"tvs"} />
            <PeliculasFavoritas titulo={"Favourites actor/actress:"} tipoFav={"people"} />
          </Route>

          <Route path='/buscarPelicula'>           
            <ListaPeliculasBusqueda busqueda={valor} listaPeliculas={peliculas} />
          </Route>

          <Route path='/'>
            <PeliculasPorVoto titulo={"Trending topic "} />
            <PeliculasPorPopularidad titulo={"Most popular"} />
          </Route>

        </Switch>
      </div>
      {mostrarFooter && <Footer />}
    </Router>
    
  );
}


export default HomePage;
