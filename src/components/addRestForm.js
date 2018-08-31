import React, { Component } from 'react';
import { func } from 'prop-types';
import Restaurants from './restaurantList';
import RandomPick from './randomPicked'

class AddRestForm extends Component {


 state = {
   faveList: ["Two Birds", "PokePalace", "Chipotle", "McCormick & Schmidt's" , "Cheesecake Factory"],
   faveList2: ["Steak", "seafood", "pasta"],
   name: '',
   randomPick: ''
}

addToRest = () => {
   let newRest = [...this.state.faveList, this.state.name]
   this.setState({
     faveList: newRest
   })
 }

 onfaveListChange = e => {
   this.setState({ name: e.target.value })
 }

 formSubmit = e => {
   e.preventDefault();
   let newRest = [...this.state.faveList, this.state.name]

   this.setState({
     faveList: newRest,
     name: ''
   });

 }

    
randomPick = e => {
    let random = this.state.faveList[Math.floor(Math.random() * this.state.faveList.length)];
    this.setState({ randomPick: random })
}



 randomPickedRestaurant = e => {
 return (this.state.faveList[Math.floor(Math.random() * this.state.faveList.length)])
 }

 render() {
   return (
        <div> 
            <form onSubmit={this.formSubmit}>
                <div className="form-group">
                    <label>Restaurant Name</label>
                     <input type="text" value={this.state.name} onChange={this.onfaveListChange} className='form-control' placeholder='Enter Restaraunt' />
                    <button type='submit' className='btn btn-primary'>Save a Fave</button>
                </div>
            </form>

                <div>
                <button type='submit' className='btn btn-primary' onClick={this.randomPick}>Random Pick</button> 
                </div>
               <div>
                <h1>Enjoy your meal at {this.state.randomPick}</h1>
                </div>

          </div>
 









   );
 }
}

AddRestForm.propTypes = {
addToRest: func,
}
export default AddRestForm;