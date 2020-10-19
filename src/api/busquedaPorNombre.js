import axios from 'axios';

function busquedaPorNombre(busqueda){
    return axios.get(
       `http://www.omdbapi.com/?apikey=c076e739&s=${busqueda}&plot=full`
    )
}
export default busquedaPorNombre;
  