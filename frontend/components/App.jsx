import React from "react";
import MastheadContainer from "./masthead/masthead_container";
import './fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SessionFormContainer from "./session_form/session_form_container";
import CreateAccountFormContainer from "./account_form/create_account_form_container"
import { Route } from 'react-router-dom';

const App = () => {
    return <div>
        <Route exact path="/" component={MastheadContainer} />
        <div id="content">
            <Route path="/login" component={SessionFormContainer} />
            <Route path="/signup" component={CreateAccountFormContainer} />
        </div>
    </div>
}

export default App;