import axios from 'axios'

const axiosInstance=axios.create({
    //https://api.rawg.io/api/games?key=37838b368bf34ab0bb5403e02b716a84
     
    baseURL:'https://api.rawg.io/api/',
  
    headers:{
        // 'authorization':"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjI1N2NjM2E0NjEyYzlmNGE4NjEyMjA0ZDZhNGIwYyIsInN1YiI6IjY0MGU2NTcxYjQyMjQyMDA4YTJkYTAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BgiR1EugUT2ZQnyrgk-_tkCtCY5cNMOPjRY31qhhhPI",
    },
    params:{
        'key':'37838b368bf34ab0bb5403e02b716a84',
    }

})

export default axiosInstance