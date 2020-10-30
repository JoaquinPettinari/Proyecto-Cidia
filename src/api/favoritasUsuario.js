import axios from 'axios';

function favoritasUsuario(tipoFav){
    return axios.get(`https://proyect-cidia-app.netlify.app/${tipoFav}`);
}

export default favoritasUsuario;
  