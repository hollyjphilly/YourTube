import React from 'react';
import { Redirect } from 'react-router-dom';
import signupButton from "./signup_button";
import { Route } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        // const { currentUser } = this.props;
        return <>
            {/* {currentUser ? "" : <Redirect to='/'/>} */}
            <form onSubmit={this.handleSubmit}>
                <label>Username
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                </label>
                <label>Password
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                    />
                </label>
                <div>
                    <button>{this.props.formType}</button>
                    <Route path="/login" component={signupButton} />
                </div>
            </form>
        </>
    }
}

export default SessionForm;