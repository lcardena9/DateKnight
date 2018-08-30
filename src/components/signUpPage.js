import React, { Component } from 'react';
import { func } from 'prop-types';
import LogInPage from './logInPage';

class SignUpPage extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    onFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    onLastnameChange = event => {
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

    formLogin = event => {
        event.preventDefault();

        this.props.addToItems(this.state);

        this.setState({
            username: ' ',
            password: ' '
        })
    }


    changePage = name => {
        this.setState({
          pageName: name
        })
      }
    
    
      selectPage = (page) => {
        switch (page) {
          case 'logInPage':
            return (
              <LogInPage />
            )
          case 'signUpPage':
            return (
              <SignUpPage />
            )
        }
      }
    



    render() {
        return (
            <div className="login-page-background">
                <div className='container'>
                    <div className="row title-row">
                        <img className = "DK-Logo" src="http://i6.photobucket.com/albums/y238/Lucas9/dateknightwhiteshadow.png"/>
                    </div>
                    <div className="row">
                        <div class="col-md-4 div-height"></div>
                        <div class="col-md-4 div-height">
                    

                    {/* FORM CODE */}
                    <div className="form-group">
                                <login onSubmit={this.formLogin}>
                                    <label>First Name</label>
                                    <input type="text" value={this.state.username} onChange={this.onUsernameChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                                    <login onSubmit={this.formLogin}>
                                    <label>Last Name</label>
                                    <input type="text" value={this.state.username} onChange={this.onUsernameChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                            <login onSubmit={this.formLogin}>
                                    <label>Email</label>
                                    <input type="text" value={this.state.username} onChange={this.onUsernameChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                                    <label>Password</label>
                                    <input type="Password" value={this.state.password} onChange={this.onPasswordChange} className="form-control" placeholder="" />

                                    <input className="btn btn-primary" type="submit" value="Sign Up" id="submit"></input>
                                    <button className="btn btn-primary swap" float-right onClick={() => { this.props.changePage("logInPage") }}> Log In </button>
                            </div>
                            </div>
                            <div class="col-md-4 div-height"></div>
                     {/* END FORM CODE */}


                        </div>
                    </div >
                </div>


                );
            }
        
        }
        

                    
export default SignUpPage;