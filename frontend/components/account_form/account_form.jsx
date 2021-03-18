import React from 'react';
import signinInsteadButton from "./signin_instead_button";
import Joojle from '../joogle';
import { Redirect, Route } from 'react-router-dom';

class AccountForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            username: "",
            password: "",

        };
        this.typing = "text";
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
                <h1>Create your <Joojle /> Account</h1>

                <div className="name">
                    <input
                        type="text"
                        value={this.state.first_name}
                        placeholder="First name"
                        onChange={this.update('first_name')}
                    />

                    <input
                        type="text"
                        value={this.state.last_name}
                        placeholder="Last name"
                        onChange={this.update('last_name')}
                    />
                </div>

                <input
                    type="text"
                    value={this.state.email}
                    placeholder="Your email address"
                    onChange={this.update('email')}
                />

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
                    <Route path="/signup" component={signinInsteadButton} />
                </div>
            </form>
        </>
    }
}

export default AccountForm;