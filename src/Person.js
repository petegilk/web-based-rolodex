import React, {Component} from 'react'

class PersonComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    }
  }

  toggle = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }
  
  
  render() {
    const {item} = this.props;
    // const item = this.props.item
    const {picture, name, email } = item;
    // const picture = item.picture
    return(
      <li>
        <img src={item.picture.medium} alt={item.name.first}></img>
        <h2>{`${name.first} ${name.last}`}</h2>
        <button onClick={this.toggle}>{!this.state.isClicked ? "Show Info" : "Hide Info"}</button>
        {this.state.isClicked && (
          <div className="person-details">
          <p>E-mail: {this.props.item.email}</p>
          <p>Phone: {this.props.item.phone}</p>
        </div>
        )}
      </li>
    )
  }
}

export default PersonComponent