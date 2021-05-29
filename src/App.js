import React, { useState } from "react";



import logo from "./logo.svg";

import "./App.css";



import Input from "./components/input/Input";

import Button from "./components/input/Button/Button";



function App() {

const [email, setEmail] = useState("");

const [password, setPassword] = useState("");



const handleLoginSubmit = (e) => {

e.preventDefault()

console.log("FORM SUBMITTED")



alert(`Logged in successfully as ${email} with ${password}`)

}



console.log(email, password);



return (

<div className="App">
<h1>Login Form</h1>

<form onSubmit={handleLoginSubmit}>

<Input type="email" title="Email: " id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
<Input type="password" title="Password: " id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
<Button type="submit" name="Login" />
</form>
</div>

);
}

export default App;
