import axios from 'axios';

function agregarAFavoritos(idPeli, poster, tipoAdd){
    return axios.post(`http://localhost:3001/`,{
        id: idPeli,
        poster_path: poster,
        tipo:tipoAdd,
        profile_path:poster
    });
}

export default agregarAFavoritos;
  