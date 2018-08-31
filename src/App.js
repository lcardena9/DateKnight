import React, { Component } from 'react';
import UserPage from './components/userPage';
import './App.css';
import LogInPage from './components/logInPage'
import SignUpPage from './components/signUpPage'
import BadPage from './components/badPage'

class App extends Component {
  state = {
    data: [],
    pageName: 'logInPage',
    users: [
      {
        email: 'abc@gmail.com',
        password: 'abc'
      },
      {
        email: '123@gmail.com',
        password: '123'
      }
    ],
    goodLogin: false
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
          <LogInPage
            changePage={this.changePage}
            login={this.login}
          />
        )
      case 'signUpPage':
        return (
          <SignUpPage changePage={this.changePage} />
        )
      case 'userPage':
        return (
          <UserPage changePage={this.changePage} />
        )
      default:
        return <BadPage 
        changePage={this.changePage}
        login={this.login}/>
    }
  }

  // user: object { email, password } => undefined
  login = user => {
    let users = this.state.users;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === user.email && users[i].password === user.password) {
        this.changePage('userPage');
        return;
      }
    }
    // Get to this point; they have checked the whole array and didn't find a match
    this.changePage('badPage')
  }

  render() {

    return (
      <div>
      {/* <div><AddRestForm /></div> */}
        
      {this.selectPage(this.state.pageName)}


        

      </div>
    );
  }
}


export default App;


















