import React, {  } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { HomeWorldWiew } from './HomeWorld'

const App: React.FC = () => {

    return <>
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Home />
                </Route>
                <Route path={"/homeworld/:id"}>
                    <HomeWorldWiew />
                </Route>
            </Switch>
        </BrowserRouter>
    </>

}

export default App