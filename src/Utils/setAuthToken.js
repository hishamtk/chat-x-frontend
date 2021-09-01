import axios from "axios"

const setAuthToken = (token) => {
    if(token){
        localStorage.setItem("jwtToken",token);
        axios.defaults.headers.common["Authorization"]  = token;
    }else{
        localStorage.removeItem("jwtToken")
        delete axios.defaults.headers.common["Authorization"]
    }
}

export default setAuthToken
