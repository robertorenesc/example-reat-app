import React from 'react';
import {
    BrowserRouter, Route, Switch
} from "react-router-dom";

const App: React.FC = () => {
    return <>
        <BrowserRouter>
            <Switch>
                {<Route exact path="/" component={Home}></Route>}
                {/* {<Route exact path="/"></Route>} */}
            </Switch>
        </BrowserRouter>
    </>

}

export default App