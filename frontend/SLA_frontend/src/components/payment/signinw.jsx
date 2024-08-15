import axios from "axios";

const Signinw = async({email,password})=>{
    const username = email;
    const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
        username,
        password
      });
      localStorage.setItem("token", response.data.token);
}

export default Signinw;   