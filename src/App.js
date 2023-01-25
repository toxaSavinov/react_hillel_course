import './App.css';
import Child from "./Child";
import {Component} from "react";

class App extends Component {
    state = {
      number: 5,
      name: 'test',
      isPrint: true
    }

  handlerClick = () => {
      this.setState({isPrint: !this.state.isPrint});
  }

render() {
  return (
      <>
        {this.state.isPrint ? 'Hello' : 'Bye'}
          <Child
              data={this.state.number}
              name={this.state.name}
           />
        <button onClick={this.handlerClick}>Click</button>
      </>
  );
}
}

export default App;
