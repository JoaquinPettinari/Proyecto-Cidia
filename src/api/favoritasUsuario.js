import axios from 'axios';

function favoritasUsuario(){
    return axios.get(`http://localhost:3001/`);
}

export default favoritasUsuario;
  