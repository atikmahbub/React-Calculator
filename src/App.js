import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Key} from './key'

var flag = 0;
class App extends Component {



  constructor(){
    super();
    this.state = {
      equation:  "",
      result: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleClick(e){
      const operator = ['+','-','*','/'];
      const operands = ['0','1','2','3','4','5','6','7','8','9'];
      let lastItem = this.state.equation[this.state.equation.length - 1];

      if(flag === 1 && operator.includes(e)){
        this.setState({
            equation : this.state.result += e
        })
        this.calculate(this.state.equation);
        flag = 0;
      }
      else if(flag === 1 && operands.includes(e)){

        this.setState({
            equation : "" + e
        })
        this.calculate(this.state.equation);
        flag = 0;

      }

      else if(e ==="="){
        this.calculate(this.state.equation);
        flag = 1;
      }
      else if(operator.includes(e) && operator.includes(lastItem) ){

            const doubleOp =this.state.equation.slice(0, -1) ;
            const newOp = doubleOp + e;
            this.setState({
              equation: newOp
            })

      }
      else if (e=='DEL'){
        this.deleteLastItem(this.state.equation);
      }
      else if(e=='C'){
        this.clearDisplay(this.state.equation);
      }
      else{
      const value  = this.state.equation += e;
      this.setState({
        equation : value
      })
    }

  };

  clearDisplay(eq){
    this.setState({
      equation : "",
      result: ""
    })
    flag = 0;
  }

  deleteLastItem(eq){

     if(eq.length >= 1) {
      
      this.setState({
        equation: eq.slice(0, -1)
      });
     };
    
  }

  calculate(symbol){
   
    const operator = ['+','-','*','/'];
    const notAllowed_operator = ['*','/']; 
    let lastItem = symbol[symbol.length - 1];
    let firstItem = symbol[0];
    const invalid = "invalid expression";
    
    if(operator.indexOf(lastItem) > -1 || notAllowed_operator.indexOf(firstItem) > -1){
      this.setState({
        result: invalid
      })
    }

    else{
     try {
         const result = eval(symbol);
          this.setState({
              result: result
            })


    } catch (e) {
        if (e instanceof SyntaxError) {
            this.setState({
              result : invalid
            })
        }
    }
  }
}


  render() {
    return (
        <div id="calculator">
        <div id="head">
        React Calculator
        </div>
        <div id = "full">
        <div className = "equation">{this.state.equation}</div>
        <div className="result">{this.state.result}</div>
        <div id="break"></div>
        <Key onClick={this.handleClick}/>
        </div>
        </div>
    );
  }
}

export default App;
