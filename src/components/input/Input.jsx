import React from "react";



const Input = (props) => {

return (

<div className="input">

<label htmlFor={props.id}>{props.title}</label>

<input type={props.type} id={props.id} value={props.value} onChange={props.onChange} />

</div>

);

};



export default Input;