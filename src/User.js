import React from 'react';
import './App.css';

class User extends React.Component {
  constructor(props) {
    console.log("constructor method call 1st")
    super(props);
    this.state = {
      userName: 'SagarRamu'
    };
  }

  getSnapshotBeforeUpdate(oldProps, oldState) {
    console.log(oldProps);
    console.log(oldState);
    console.log("getSnapshotBeforeUpdate called before componentdidupdate");
    return [oldProps, oldState];
  }

  componentDidUpdate() {
    console.log('Component Updated');
  }

  componentDidMount() {
    console.log("componen did mount called after render method 4th");
    setTimeout(() => {
      this.setState({
        userName: 'Sagar'
      })
    }, 500);
  }

  static getDerivedStateFromProps(props) {
    console.log('Get Derived State Properties called 2nd');
    return {
      pwd: props.pwd
    }
  }

  shouldComponentUpdate() {
    console.log("Should component Update Method called before render method");
    return true;
  }

  // componentWillUnmount() {
  //   console.log('Component is going to be removed called last method componentWillUnmount');
  // }
  render() {
    console.log("Render method called 3rd");
    return (
      <div className="App">
        <h1> {this.state.userName} </h1>
      </div>
    );
  };
}

export default User;
