// App.js
//
import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      value:'',
      message:''
    }
    this.getUser();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getUser() {
    fetch('/user')
      .then(response => response.json())
      .then(data => {
        this.setState({
          user: data
        });
      });
  }

handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    
    this.setState(
         { message : this.state.value,
          value:'' }
     );
     console.log(data)
}

handleInputChange = (event) =>{
     event.preventDefault()
     this.setState({
         value: event.target.value
     })
}
  render() {
    const{value, message} = this.state;
    return (
      <div className="App">
        <h1>name is {this.state.user.name}</h1>
        <p>age is {this.state.user.age}</p>
        <p>check above if connected to backend</p>

        <div >
            <h1>Type a message, then press Enter or "Send Message" to view</h1>
            
            <form onSubmit={this.handleSubmit}>
                <p><input type='text' placeholder = 'Your Message' value = {this.state.value}  onChange={this.handleInputChange} id = 'input'/></p>
                <p><button>Send Message</button></p>
            </form>
           <div id = 'message'> <p> Message is : {message}</p> </div>   
           <footer></footer>        
        </div>
        
      </div>

      
    );
  }
}
export default App;