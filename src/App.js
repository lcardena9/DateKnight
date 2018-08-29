import React, { Component } from 'react';
import UserPage from './components/userPage';
import Login from './components/login';
import './App.css';
import SignUp from './components/signUp';

class App extends Component {
  state = {
    data: []
  }

  selectPage = (page) => {
    switch (page) {
      case 'login':
        return (
          <Login
            people={this.state.people}
            selectPerson={this.selectPerson}
          />
        )

      case 'userPage':
        return (
          <userPage
            name={this.state.people[this.state.selected].name}
            profile_images={Object.values(this.state.people[this.state.selected].sprites)}
          />
        )
    }
  }


  render() {
    return (
      <UserPage/>
      // <div className="page-background">
      //   <div className='container'>
      //     <div className="row title-row">
      //         <h1 className = "Title">Up To You Babe</h1>
      //     </div>
      //     <div className="row">
      //       <div class="col-md-4 div-height"></div>
      //       <div class="col-md-4 div-height">
      //         {/* <Login
      //           addToItems={this.addToItems}
      //         /> */}
      //       </div>
      //       <div class="col-md-4 div-height"></div>
      //       {/* <SignUp/> */}
      //     </div>
      //   </div >
      // </div>
    );
  }
}





export default App;
