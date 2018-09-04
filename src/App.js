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
    faveList: ["Two Birds ", "PokePalace ", "Chipotle ", "McCormick & Schmick's ", "Cheesecake Factory "],
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
    goodLogin: false,
    randomPick: ""
  }



  changePage = name => {
    this.setState({
      pageName: name
    })
  }

  addToFavelist = (newEntry) => {
    let tempFaves = [...this.state.faveList, newEntry];

    this.setState({
      faveList: tempFaves
    });

  }

  chooseRandomRest = e => {
    let randomPick = this.state.faveList[Math.floor(Math.random() * this.state.faveList.length)];
    console.log(randomPick);
    this.setState({ randomPick: randomPick })
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
          <UserPage changePage={this.changePage}
          chooseRandomRest={this.chooseRandomRest} 
          randomPick={this.state.randomPick}
          faveList={this.state.faveList}
          addToFavelist={this.addToFavelist}
          />
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


















