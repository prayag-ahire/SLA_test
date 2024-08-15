import axios from "axios";

const Signupw = async({email,username1,fullName,password})=>{
  console.log(email+" "+username1+" "+password);
    const username = email;
    const firstName = username;
    const lastName = fullName;
    const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
        username,
        firstName,
        lastName,
        password
      });
      localStorage.setItem("token", response.data.token)
}

export default Signupw;