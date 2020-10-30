import axios from 'axios';

function agregarAFavoritos(idPeli, poster, tipoAdd){
    return axios.post(`https://proyect-cidia-app.netlify.app/`,{
        id: idPeli,
        poster_path: poster,
        tipo:tipoAdd,
        profile_path:poster
    });
}

export default agregarAFavoritos;
  