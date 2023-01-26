import {Component} from "react";

class Spoiler extends Component {
  state = {
    name: 'Stepan',
    age: 25,
    isHidden: false
  }

  changeNameClickHandler = () => {
    if (this.state.name === 'Mykola') {
      this.setState({
        name: 'Stepan',
        age: 25,
      });
    } else {
      this.setState({
        name: this.props.name,
        age: this.props.age,
      });
    }
  }

  hideBlockClickHandler = () => {
    this.hideBlock('info');
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  hideBlock = (elementId) => {
    let element = document.getElementById(elementId);
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }

  render() {
    let buttonText = this.state.isHidden ? 'Show' : 'Hide';
    return (
        <>
          <h3>Presentation</h3>
          <div id={'info'}>
            <p>Name: {this.state.name}, age: {this.state.age}</p>
            <button onClick={this.changeNameClickHandler}>Change person</button>
          </div>
          <button onClick={this.hideBlockClickHandler}>{buttonText} information</button>
        </>
    )
  }
}

export default Spoiler;
