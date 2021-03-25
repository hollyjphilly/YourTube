import React from "react";


import { Route, Switch } from 'react-router-dom';


import Feed from "./feed";

function Main() {
    return (
    <>
        
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/feed/explore" component={Feed} />
            <Route exact path="/feed/subscriptions" component={Feed} />
            
        </Switch>
    </>
    )
}

export default Main;