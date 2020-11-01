import axios from 'axios';

function favoritasUsuario(tipoFav){
    return axios.get(`http://localhost:3001/${tipoFav}`);
}

export default favoritasUsuario;
  