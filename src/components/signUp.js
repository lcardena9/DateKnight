import React, { Component } from 'react';

class SignUp extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    onFirstnameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }
    onLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }
    onEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }
    onPasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <login onSubmit={this.formLogin}>
                <div className="form-group">
                    <label>firstName</label>
                    <input type="text" value={this.state.firstName} onChange={this.onFirstnameChange} className="form-control" placeholder="First Name" />
                </div>

                <div className="form-group">
                    <label>lastName</label>
                    <input type="Password" value={this.state.lastName} onChange={this.onLastNameChange} className="form-control" placeholder="Last Name" />
                </div>
               
                <div className="form-group">
                    <label>email</label>
                    <input type="text" value={this.state.email} onChange={this.onEmailChange} className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="Password" value={this.state.password} onChange={this.onPasswordChange} className="form-control" placeholder="Password" />
                </div>
                </login>

                );
                }
                
            }

    // Login.propTypes = {
    //     addToItems: func
    // }
    
    export default SignUp;