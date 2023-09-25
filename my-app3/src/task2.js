import React from 'react'
import { useState } from 'react';

export default function Task2() {
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [result,setresult]=useState(0);
    const [operator,setOperator]=useState();

    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(operator=='+'){
            setresult(parseInt(num1)+parseInt(num2))
        }
        if(operator=='-'){
            setresult(parseInt(num1)-parseInt(num2))
        }
        if(operator=='*'){
            setresult(parseInt(num1)*parseInt(num2))
        }
        if(operator=='/'){
            setresult(parseInt(num1)/parseInt(num2))
        }
      }

    return (
      <div>
        <form onSubmit={handleSubmit}>
                <label>First Number:</label><br/>
                <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} /><br/>
                <label>Second Number:</label><br/>
                <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} /><br/>
                <label>Operator:</label><br/>
                <select style={{width:'5%',textAlign:'center'}} value={operator} onChange={(e) => setOperator(e.target.value)}>
                    <option value="+" selected>+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <br/><br/>
                <input type="submit" value="Result" /><br/>
                <label>Result:</label><br/>
                <label>{result}</label>
            </form>
      </div>
    )
}
