import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

function Multiply() {
    const { num1, num2 } = useParams();
    const history = useHistory();
}

export default Multiply;