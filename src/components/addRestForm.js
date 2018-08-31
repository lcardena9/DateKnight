import React, { Component } from 'react';
import { func } from 'prop-types';
import Restaurants from './restaurantList';

class AddRestForm extends Component {


 state = {
   faveList: ["Two Birds", "PokePalace", "Chipotle", "McCormick & Schmidt's" , "Cheesecake Factory"],
   name: '',
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
    console.log(this.state.faveList[Math.floor(Math.random() * this.state.faveList.length)]);
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
        </div>
 









   );
 }
}

AddRestForm.propTypes = {
addToRest: func,
}
export default AddRestForm;