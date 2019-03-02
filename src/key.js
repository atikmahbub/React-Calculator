import React, { Component } from 'react';
import './key.css'


export class Key extends Component{


	render(){
		return(
			<div id="body">
			<div id="number">
			<button id="key-7" value="7" onClick={(e)=>this.props.onClick(e.target.value)}>7</button>
			<button id="key-8" value="8" onClick={(e)=>this.props.onClick(e.target.value)}>8</button>
			<button id="key-9" value="9" onClick={(e)=>this.props.onClick(e.target.value)}>9</button>
			<button id="key-6" value="6" onClick={(e)=>this.props.onClick(e.target.value)}>6</button>
			<button id="key-5" value="5" onClick={(e)=>this.props.onClick(e.target.value)}>5</button>
			<button id="key-4" value="4" onClick={(e)=>this.props.onClick(e.target.value)}>4</button>
			<button id="key-3" value="3" onClick={(e)=>this.props.onClick(e.target.value)}>3</button>
			<button id="key-2" value="2" onClick={(e)=>this.props.onClick(e.target.value)}>2</button>
			<button id="key-1" value="1" onClick={(e)=>this.props.onClick(e.target.value)}>1</button>
			<button id="key-0" value="0" onClick={(e)=>this.props.onClick(e.target.value)}>0</button>
			<button id="key-point" value="." onClick={(e)=>this.props.onClick(e.target.value)}>.</button>
			<button id="key-submit" value="=" onClick={(e)=>this.props.onClick(e.target.value)}>=</button>
			</div>


			<div id= "right-panel">
			<button id="key-clear" value="C" onClick={(e)=>this.props.onClick(e.target.value)}>C</button>
			<button id="key-del" value="DEL" onClick={(e)=>this.props.onClick(e.target.value)}>DEL</button>
			<button id="key-divide" value="/" onClick={(e)=>this.props.onClick(e.target.value)}>/</button>
			<button id="key-mul" value="*" onClick={(e)=>this.props.onClick(e.target.value)}>X</button>
			<button id="key-sub" value="-" onClick={(e)=>this.props.onClick(e.target.value)}>-</button>
			<button id="key-add" value="+" onClick={(e)=>this.props.onClick(e.target.value)}>+</button>

			</div>
			</div>
		);
	}
}