import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import './Calculator.css'

function Calculator(){
    const history = useHistory();
    const [nums, setNums] = useState({
        num1: "",
        num2: ""
    });
    const [operation, setOperation] = useState(null)

    //set numbers as input
    const handleChange = (evt) =>{
        const { name, value } = evt.target
        setNums(oldNums => ({
            ...oldNums,
            [name]: value
        }));
    }

    //route to the correct component
    const handleSubmit = (evt) => {
        evt.preventDefault();
        history.push(`/calc/${operation}/${nums.num1}/${nums.num2}`);
    }

    return (
        <div className="Calculator">
            <form onSubmit={handleSubmit}>
                <div className="num1-div">
                    <input type="text" name="num1" id="num1" value={nums.num1} placeholder="First Number" onChange={handleChange}></input>
                </div>
                <div className="num2-div">
                    <input type="text" name="num2" id="num2" value={nums.num2} placeholder="Second Number" onChange={handleChange}></input>
                </div>
                <div className="operations">
                    <button className="operator" id="add" onClick={() => setOperation(s => "add")}>+</button>
                    <button className="operator" id="subtract" onClick={() => setOperation(s => "subtract")}>-</button>
                    <button className="operator" id="multiply" onClick={() => setOperation(s => "multiply")}>x</button>
                    <button className="operator" id="divide" onClick={() => setOperation(s => "divide")}>/</button>
                </div>
            </form>
        </div>
    )
}

export default Calculator;