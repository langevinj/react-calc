import React from 'react' 
import { useParams, useHistory } from 'react-router-dom'

function Subtract(){
    const { num1, num2 } = useParams();
    const history = useHistory();
}

export default Subtract;