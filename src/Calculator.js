import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'

function Calculator(){
    const history = useHistory();
    const [nums, setNums] = useState({
        num1: "",
        num2: ""
    });

    handleChange = (evt) =>{
        const { name, value } = evt.target
        setNums(oldNums => ({
            ...oldNums,
            [name]: value
        }));
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const operation = evt.target.id
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
                    <button className="operator" id="add">+</button>
                    <button className="operator" id="subtract">-</button>
                    <button className="operator" id="multiply">x</button>
                    <button className="operator" id="divide">/</button>
                </div>
            </form>
        </div>
    )
}

export default Calculator;