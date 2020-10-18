import axios from 'axios';

function peliculasInicio(busqueda){
    return axios.get(
       `http://www.omdbapi.com/?apikey=c076e739&s=${busqueda}&plot=full`
    )
}
export default peliculasInicio;
  