import React from 'react';
import { Redirect } from 'react-router-dom';
import signupButton from "./signup_button";
import { Route, Link } from 'react-router-dom';
import Joojle from '../joogle';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logindemo = this.logindemo.bind(this);
    }

    logindemo() {
        this.props.processForm({ username: "demo", password: "password", })
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
        return <div className="background">
            {currentUser ? <Redirect to='/' /> : ""}
            <div className="content">
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

                    <p>Or view site using a <a onClick={this.logindemo}>demo account</a></p>

                    <div className="form-btns">
                        <button className="form-submit">{this.props.formType}</button>
                        <Route path="/login" component={signupButton} />
                    </div>
                </form>
            </div>
        </div>
    }
}

export default SessionForm;