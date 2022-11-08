import {BrowserRouter , Routes,Route} from "react-router-dom"
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Home from "./components/Home/home";

import './App.css';

const App=()=>{
  return(
  <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>
  )
}
// class App extends Component{
//   state={
//     firstname:"",
//     lastname:"",
//     phone:"",
//     email:"",
//     age:""
//   }
//   onSubmitForm=async(e)=>{
//     e.preventDefault()
//     const{firstname,lastname,phone,email,age}=this.state
//     // const entollDetails={firstname,lastname,phone,email,age}
//     const options={
//     method:"POST",
//     headers:{"Content-Type":"application/json"},
//     body:JSON.stringify({firstname,lastname,phone,email,age})
//   }
//   const response=await fetch("/api/people/store",options)
//   console.log(await response.json())
//   if (response.ok ) {
//     this.setState({firstname:"",lastname:"",email:"",age:"",phone:""})
//     // console.log(entollDetails)

//       console.log("Upload Success")
//     } else {
//       console.log("Upload Filed")
//     }
//   }
//   onChangeFirstname=(event)=>{
//     this.setState({firstname:event.target.value})
//   }
//   onChangeLastname=(event)=>{
//     this.setState({lastname:event.target.value})
//   }
//   onChangePhone=(event)=>{
//     this.setState({phone:event.target.value})
//   }
//   onChangeEmail=(event)=>{
//     this.setState({email:event.target.value})
//   }
//   onChangeAge=(event)=>{
//     this.setState({age:event.target.value})
//   }
//   render(){
//     const{firstname,lastname,phone,email,age}=this.state
//   return (
//     <div className="App">
//       {/* <details >
//         <summary>Entroll Form</summary> */}
//         <form method="POST" className="form-container" onSubmit={this.onSubmitForm}>
//           <div>
//             <label>Firstname</label>
//             <input type="text" value={firstname} onChange={this.onChangeFirstname}/>
//           </div>
//           <div>
//             <label>Lastname</label>
//             <input type="text" value={lastname} onChange={this.onChangeLastname}/>
//           </div>
//           <div>
//             <label>Phone</label>
//             <input type="text" value={phone} onChange={this.onChangePhone}/>
//           </div>
//           <div>
//             <label>Email</label>
//             <input type="email" value={email} onChange={this.onChangeEmail}/>
//           </div>
//           <div>
//             <label>Age</label>
//             <input type="" value={age} onChange={this.onChangeAge}/>
//           </div>
//           {/* <div>
//             <label>Image</label>
//             <input type="file"/>
//           </div> */}
//           <button type="submit">Submit</button>
//         </form>
//       {/* </details> */}
     
//     </div>
//   );
// }
// }

export default App;
