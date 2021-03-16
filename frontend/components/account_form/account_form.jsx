import React from 'react';
import signinButton from "./signin_button";
import { Route } from 'react-router-dom';

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
        // const { currentUser } = this.props;
        return <>
            {/* {currentUser ? <Redirect to='/' /> : ""} */}
            <form onSubmit={this.handleSubmit}>
                <label>First name
                    <input
                        type="text"
                        value={this.state.first_name}
                        placeholder="First name"
                        onChange={this.update('first_name')}
                    />
                </label>
                <label>Last name
                    <input
                        type="text"
                        value={this.state.last_name}
                        placeholder="Last name"
                        onChange={this.update('last_name')}
                    />
                </label>
                <label>Email
                    <input
                        type="text"
                        value={this.state.email}
                        placeholder="Your email address"
                        onChange={this.update('email')}
                    />
                </label>
                <label>Username
                    <input
                        type="text"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.update('username')}
                    />
                </label>
                <label>Password
                    <input
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.update('password')}
                    />
                </label>
                <div>
                    <button>{this.props.formType}</button>
                    <Route path="/signup" component={signinButton} />
                </div>
            </form>
        </>
    }
}

export default AccountForm;