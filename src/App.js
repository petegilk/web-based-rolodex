import React, {Component} from 'react';
import './App.css';
import PersonComponent from './Person'

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  //fetch api
  componentDidMount() {
    fetch('https://randomuser.me/api?results=25')
      .then(response => response.json())
      .then(response => {
        this.setState({
          items: response.results
        })
      });
      
  }

  //display information from the api 
  render() {
    console.log(this.state.items);
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => {
            return (
              <PersonComponent key={item.id.value} item={item} isClicked={this.state.isClicked}/>
            )
          })}
        </ul>
      </div>
    )
  }
}


export default Directory;
