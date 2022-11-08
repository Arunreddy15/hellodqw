import { Component } from "react";
import {Link} from "react-router-dom"
import './navbar.css';
class Navbar extends Component{
    render(){
        return<div className="nav">
            <div className="inner-div">
                <div className="logo">Ab</div>
                <ul>
                    <li><Link className="navlinks" to="/">Home</Link></li>
                    <li><Link className="navlinks" to="/profile">Profile</Link></li>
                    <li><Link className="navlinks" to="/login">Login</Link></li>
                    <li><Link className="navlinks" to="/register">Registration</Link></li>
                </ul>
            </div>
        </div>
    }
}
export default Navbar