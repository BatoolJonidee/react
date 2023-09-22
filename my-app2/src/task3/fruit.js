import React from "react"
// import ReactDOM from 'react-dom';
// import './index.css';

export default function Fruit (props){

	return (
		<div className="fruit">
			<h1>List of Fruits</h1>
			<p>Name: {props.fruits.name}</p>
			<p>Color: {props.fruits.color}</p>
		</div>
	)
}




