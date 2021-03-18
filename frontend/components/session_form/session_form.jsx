import React from 'react';
import { Redirect } from 'react-router-dom';
import signupButton from "./signup_button";
import { Route } from 'react-router-dom';
import Joojle from '../joogle';

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
        const { currentUser } = this.props;
        return <>
            {currentUser ? <Redirect to='/' /> : ""}
            <form onSubmit={this.handleSubmit}>
                <h1>
                    <span>Sign in to </span>
                    <Joojle />
                </h1>

                <input
                    type="text"
                    value={this.state.username}
                    placeholder="Username"
                    onChange={this.update('username')}
                />

                <input
                    type="password"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.update('password')}
                />

                <div className="form-btns">
                    <button className="form-submit">{this.props.formType}</button>
                    <Route path="/login" component={signupButton} />
                </div>
            </form>
        </>
    }
}

export default SessionForm;