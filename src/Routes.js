import React, {useState} from 'react' 
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Calculator from './Calculator'
import Add from './Add'
import Subtract from './Subtract'
import Multiply from './Multiply'
import Divide from './Divide'

function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/calc/add/:num1/:num2"><Add /></Route>
            <Route exact path="/calc/subtract/:num1/:num2"><Subtract /></Route>
            <Route exact path="/calc/multiply/:num1/:num2"><Multiply /></Route>
            <Route exact path="/calc/divide/:num1/:num2"><Divide /></Route>
            <Route exact path="/calc"><Calculator /></Route>
            <Redirect to="/calc"></Redirect>
        </Switch>
        </BrowserRouter>
    )
}