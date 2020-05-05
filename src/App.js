import React, { Component } from 'react';
import { Button }  from '@material-ui/core';
import UserDetails from './user-details';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded:false,
    
    }
  }

  handleOnClick = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState ( {
        isLoaded:true,
        items: json,
      })
    });
  }
  
  render() {

    const {isLoaded,items } = this.state;

    return (
      <div>
        <Button 
        variant='outlined'
        onClick= { this.handleOnClick }>
          Get Users
        </Button>
        {isLoaded && 
        <UserDetails items = {items}></UserDetails>
        }
      </div>
    )
  }

}

export default App;
