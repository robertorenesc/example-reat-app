import React from 'react'
import {
    BrowserRouter, Route, Switch
  } from "react-router-dom";
import HomeWorld from './components/HomeWorld';
import StarWars from './components/StarWars'

const App: React.FC = () => {
    return <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StarWars}></Route>
                <Route path="/homeworld/:id" component={HomeWorld}></Route>
            </Switch>
        </BrowserRouter>
    </>

}

export default App