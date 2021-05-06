import React from 'react';
import { Redirect } from 'react-router-dom';
import signupButton from "./signup_button";
import { Route } from 'react-router-dom';
import Joojle from '../joogle';
import SessionFooter from './footer'

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

    toggleForgot() {
        this.setState({
            forgot: !this.state.forgot
        })
    }

    displayForgot() {
        return <span>Sorry for your loss.</span>
    }

    render() {
        const { currentUser, errors } = this.props;
        return <div className="background">
            {currentUser ? <Redirect to='/' /> : ""}
            <div className="content-outer">
            <div className="content-inner">
            <div className="content-padding">

                <form onSubmit={this.handleSubmit}>

                    <div className="signin-headings">
                        <Joojle />
                        <h1>Sign in</h1>
                        <h2 className="form-h2">to continue to YourTube</h2>
                    </div>

                    <div className="signin-body">
                        <div className="signin-body-box">
                        <div className="signin-body-smaller-box">

                        <div className="session-input">
                            <input
                                autoFocus
                                className="session-text"
                                type="text"
                                value={this.state.username}
                                placeholder=" "
                                onChange={this.update('username')}/>
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
                            <p id="signin-forgot-text"><a onClick={this.toggleForgot.bind(this)}>Forgot password?</a> {this.state.forgot ? this.displayForgot() : ""}</p>
                            <p>Just looking? Use Demo mode to sign in and preview.</p>
                            <a onClick={this.logindemo}>Demo mode</a>
                            
                        </div>
                        </div>
                        <div className="form-btns">
                            <button className="form-submit">{this.props.formType}</button>
                            <Route path="/login" component={signupButton} />
                        </div>
                        </div>
                    </div>
                </form>
               
            </div></div>
            <SessionFooter />
            </div>
            
        </div>
    }
}

export default SessionForm;