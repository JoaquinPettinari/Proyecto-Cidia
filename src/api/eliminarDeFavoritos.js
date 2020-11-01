import axios from 'axios';

function eliminarDeFavoritos(id){
    return axios.delete(`http://localhost:3001/${id}`);
}

export default eliminarDeFavoritos;
  