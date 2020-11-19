import React from 'react'
import { Route, Switch } from "react-router-dom";
import Interns from './Interns/Interns'
import Intern from './Intern/Intern'

const App = () => {
    return (
    <Switch>
        <Route exact path="/" component={Interns}/>
        <Route exact path="/interns/:id" component={Intern}/>
    </Switch>
    )
}

export default App
