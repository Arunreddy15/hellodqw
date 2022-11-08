import { Component } from "react";
import {Link} from "react-router-dom"
import Navbar from "../Navbar/navbar";
import "./login.css"
class Login extends Component{
    render(){
        return<>
        <Navbar/>
        <div className="loginpage">
            <div className="img-con">
            <img src="https://res.cloudinary.com/imagelinks/image/upload/v1667914857/5500661-removebg-preview_gnupdd.png" alt="log"/></div>
            <form>
                <div>
                    <label for="username">Username</label>
                    <input type="text" id="username"/>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="text" id="password"/>
                </div>
                <button className="log_submit">Submit</button>
                <p>Please register if not registered yet <Link to="/register">Register</Link></p>
            </form>
        </div></>
    }
}
export default Login