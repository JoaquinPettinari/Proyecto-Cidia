import axios from 'axios';

function buscarUnElemento(id){
    return axios.get(`http://localhost:3001/${id}`);
}

export default buscarUnElemento;
  