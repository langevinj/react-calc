import React from 'react' 
import { useParams } from 'react-router-dom'

function Add() {
    const {num1, num2} = useParams();

    return (
        <div>
            <p className="result">{parseFloat(num1) + parseFloat(num2)}</p>
        </div>
    )
}

export default Add;