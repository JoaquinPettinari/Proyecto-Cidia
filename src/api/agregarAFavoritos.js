import axios from 'axios';

function agregarAFavoritos(idPeli, poster){
    return axios.post(`http://localhost:3001/`,{
        id: idPeli,
        poster_path: poster
    });
}

export default agregarAFavoritos;
  