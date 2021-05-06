import React from 'react';
import signinInsteadButton from "./signin_instead_button";
import Joojle from '../joogle';
import { Redirect, Route } from 'react-router-dom';
import SessionFooter from '../session_form/footer'

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
        this.logindemo = this.logindemo.bind(this);
    }

    logindemo() {
        this.props.login({ username: "demo", password: "password", })
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        const { currentUser, errors } = this.props;
        return <div className="background">
            {currentUser ? <Redirect to='/' /> : ""}
            <div className="content-outer">
            <div className="content-inner">
            <div className="content-padding">

                <form onSubmit={this.handleSubmit}>
                    <div className="signin-headings" id="signup">
                        <Joojle />
                        <h1>Create your Joojle Account</h1>
                        <h2 className="form-h2">to continue to YourTube</h2>
                    </div>

                    <div className="signin-body">
                        <div className="signin-body-box">
                        <div className="signin-body-smaller-box">

                        <div id="name">
                            <div className="session-input">
                                <input
                                    autoFocus
                                    className="session-text"
                                    type="text"
                                    value={this.state.first_name}
                                    placeholder=" "
                                    onChange={this.update('first_name')} />
                                <label
                                    className="session-label">First name</label>
                            </div>

                            <div className="session-input">
                                <input
                                    className="session-text"
                                    type="text"
                                    value={this.state.last_name}
                                    placeholder=" "
                                    onChange={this.update('last_name')} />
                                <label
                                    className="session-label">Last name</label>
                            </div>
                        </div>

                        <div className="session-input">
                            <input
                                className="session-text"
                                type="text"
                                value={this.state.email}
                                placeholder=" "
                                onChange={this.update('email')} />
                            <label
                                className="session-label">Your email address</label>
                        </div>

                        <div className="session-input">
                            <input
                                className="session-text"
                                type="text"
                                value={this.state.username}
                                placeholder=" "
                                onChange={this.update('username')} />
                            <label
                                className="session-label">Username</label>
                        </div>

                        <div className="session-input">
                            <input
                                className="session-text"
                                type="password"
                                value={this.state.password}
                                placeholder=" "
                                onChange={this.update('password')} />
                            <label
                                className="session-label">Password</label>
                        </div>
                        {errors ? errors.map(er => (
                            <div className="errors" key={er.id}><svg className="errors-icon" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
                                </path></svg>{er}</div>
                        )) : ""}

                        <div className="signin-body-text">
                            <p id="#signin-demo-text">Or view site using a <a onClick={this.logindemo}>demo account</a></p>
                        </div>
                        </div>
                        <div className="form-btns">
                            <button className="form-submit">{this.props.formType}</button>
                            <Route path="/signup" component={signinInsteadButton} />
                        </div>
                    </div></div>
                </form>
            </div></div>
            <SessionFooter />
            </div>
        </div>
    }
}

export default AccountForm;