import React from 'react';

class User1 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    window.alert('User going to be changed');
  }

  render() {
    return <h1>This is the first User</h1>
  }
}

class User2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>This is the second User</h1>
  }
}

class UserUnmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        userId: 2
      });
    }, 1000);
  }

  render() {
    var user = '';
    if (this.state.userId === 1) {
      user = <User1></User1>
    } else {
      user = <User2></User2>
    }
    return (
      <div className="App">
        {user}
      </div>
    );
  };
}

export default UserUnmount;