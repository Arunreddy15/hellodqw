import { Component } from "react";
import {Link, NavLink} from "react-router-dom"
import Navbar from "../Navbar/navbar";
import "./reg.css"
class Register extends Component{
  state={
    firstname:"",
    lastname:"",
    phone:"",
    email:"",
    age:"",
    password:"",
    cpassword:""
  }
  onSubmitForm=async(e)=>{
    e.preventDefault()
    const{firstname,lastname,phone,email,age,password,cpassword}=this.state
    // const entollDetails={firstname,lastname,phone,email,age}
    const options={
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({firstname,lastname,phone,email,age,password,cpassword})
  }
  const response=await fetch("/api/people/store",options)
  console.log(await response.json())
  if (response.ok ) {
    this.setState({firstname:"",lastname:"",email:"",age:"",phone:"",password:"",cpassword:""})
    // console.log(entollDetails)

      console.log("Upload Success")
    } else {
      console.log("Upload Filed")
    }
  }
  onChangeFirstname=(event)=>{
    this.setState({firstname:event.target.value})
  }
  onChangeLastname=(event)=>{
    this.setState({lastname:event.target.value})
  }
  onChangePhone=(event)=>{
    this.setState({phone:event.target.value})
  }
  onChangeEmail=(event)=>{
    this.setState({email:event.target.value})
  }
  onChangeAge=(event)=>{
    this.setState({age:event.target.value})
  }
  onChangePassword=(event)=>{
    
    this.setState({password:event.target.value})
  }
   onChangeCpassword=(event)=>{
    
    this.setState({cpassword:event.target.value})
  }
  render(){
    const{firstname,lastname,phone,email,age,password,cpassword}=this.state
  return (
    <>
    <Navbar/>
    
    <div className="App">
      {/* <details >
        <summary>Entroll Form</summary> */}
        <form method="POST" className="form-container" onSubmit={this.onSubmitForm}>
          <div>
            <label>Firstname</label>
            <input type="text" value={firstname} onChange={this.onChangeFirstname}/>
          </div>
          <div>
            <label>Lastname</label>
            <input type="text" value={lastname} onChange={this.onChangeLastname}/>
          </div>
          <div>
            <label>Phone</label>
            <input type="text" value={phone} onChange={this.onChangePhone}/>
          </div>
          <div>
            <label>Email</label>
            <input type="email" value={email} onChange={this.onChangeEmail}/>
          </div>
          <div>
            <label>Age</label>
            <input type="" value={age} onChange={this.onChangeAge}/>
          </div>
          <div>
            <label>Password</label>
            <input type="text" value={password} onChange={this.onChangePassword}/>
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="text" value={cpassword} onChange={this.onChangeCpassword}/>
          </div>
          {/* <div>
            <label>Image</label>
            <input type="file"/>
          </div> */}
          <button type="submit" className="reg_sub">Submit</button>
          <p>If not already existing user please <Link to="/login">Login</Link></p>
        </form>
      {/* </details> */}
     
    </div></>
  );
}
}
export default Register