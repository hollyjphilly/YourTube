import React from "react";
import './fontawesome';
import Main from './main'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SessionFormContainer from "./session_form/session_form_container";
import CreateAccountFormContainer from "./account_form/create_account_form_container"
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => {
    return <div>
        <Switch>
            <AuthRoute path="/login" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={CreateAccountFormContainer} />
            <Route path="/" component={Main} />
        </Switch>
    </div>
}

export default App;