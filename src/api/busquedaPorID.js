import axios from 'axios';

function busquedaPorID(id){
    return axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=11f889e4938647ba6c823eba565985d3`, {
            headers:{
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWY4ODllNDkzODY0N2JhNmM4MjNlYmE1NjU5ODVkMyIsInN1YiI6IjVmOTQ3MzE3OTg4YWZkMDA2MTY4YjZlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5KobNi-Plci1aFFRBcTLfdeDjUA0qSTvnBIztOQbpPI`
            }
        }
    )
}
export default busquedaPorID;
  