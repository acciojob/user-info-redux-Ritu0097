
import React from "react";
import './../styles/App.css';
import { useDispatch,useSelector } from "react-redux";
import { changeName,changeEmail } from "./redux/actions/changeActions";

const App = () => {
  let x= useSelector((data)=>data)
  let dispatch=useDispatch()
  return (
    <div>
      <h1>User Information</h1>
        <label>Name:</label>
        <input type='text' onChange={(event)=>dispatch(changeName(event.target.value))}></input><br></br>
        <label>Email:</label>
        <input type='email' onChange={(event)=>dispatch(changeEmail(event.target.value))}></input>
        <p>Current Values in store</p>
        <p className="output">Name - {x.name}</p>
        <p className="output">Email - {x.email}</p>
    </div>
  )
}

export default App
