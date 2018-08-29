import React, { Component } from 'react';
import { func } from 'prop-types';

class Login extends Component {

    state = {
        username: 'username',
        password: 'password'
    }


    onUsernameChange = event => {
        this.setState({
            username: event.target.value
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






    render() {
        return (
            <div className="login-page-background">
                <div className='container'>
                    <div className="row title-row">
                        <h1 className="Login-Title">Date Knight</h1>
                    </div>
                    <div className="row">
                        <div class="col-md-4 div-height"></div>
                        <div class="col-md-4 div-height">
                    
                    
                    {/* FORM CODE */}
                            <div className="form-group">
                                <login onSubmit={this.formLogin}>
                                    <label>Username</label>
                                    <input type="text" value={this.state.username} onChange={this.onUsernameChange} className="form-control" placeholder="Username" />
                                </login>
                            </div>
                            <div className="form-group">
                                    <label>Password</label>
                                    <input type="Password" value={this.state.password} onChange={this.onPasswordChange} className="form-control" placeholder="Password" />

                                    <input className="btn btn-primary" type="submit" value="log in" id="submit"></input>
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
        
Login.propTypes = {
                    addToItems: func
            }
            
            
export default Login;