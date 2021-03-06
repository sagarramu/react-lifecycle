The process of inserting, updating, and deleting the components is called React Component’s lifecycle. Because all this process has some functions only applicable to that.

In React these process has there unique names, they are

    – Mounting (Inserting)

    – Update (Updating)

    – Unmounting (Deleting/Removing).

Mounting
Inserting a component into the DOM is called mounting. When a component is starting to mount, then it will 4 methods one by one when the called process is completed.

- constructor();
- getDerivedStateFromProps();
- render();
- componentDidMount();


constructor();

 - This is the first method, that component will call when it starts to mount in the DOM. The constructor will accept the properties argument and with that argument, it will call the superclass, in our case, it will be React.Component. By calling the superclass it will get access for all the properties that are available in the superclass (React.Component).

 - Usually, initial state properties are set in the constructor method after it called the superclass.

 constructor(props) {
    super(props);
    this.state = {
        userName : 'Sagarramu'
    };
}


getDerivedStateFromProps();

- This method will be called once all the process is getting done in the constructor method. This method will accept two arguments one is properties and another one is stated.
- This method is generally used to set some properties to the state object from the properties object. That’s why we have the name get derived state from props (getDerivedStateFromProps).

- This method will return an object that will be extended with our previous state object.

 static getDerivedStateFromProps(props) {
    return {
        pwd : props.pwd
    }
}

- We can also update the existing state object properties. If we use the existing state object property it will automatically update the existing property.

static getDerivedStateFromProps(props) {
    return {
        pwd : props.pwd,
        userName : 'Sagar'
    }
}


render();

- Once all the properties are set, react will call this method to render the DOM in the UI.

- This method will return the HTML elements in the form of JSX.

render() {
    return (
        <div>
            <h1> {this.state.userName} </h1>
            <h2> {this.state.pwd} </h2>
        </div>
    ); 
}


componentDidMount();

- This method will be called after the execution of the render method. This method is working as a document.load function in javascript.

- In some situations, we may end up changing some values based on the conditions after the component rendering process.

- In those situations, we will use this method.

componentDidMount() {
    if (this.state.pwd === 'super') {
        this.setState({
            pwd : 'superAdmin'
        });
    }
}

By combining all the methods which are all available under the Mount process we will get the file similar to the below.

import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : 'codewithstupid'
        };
    }

    componentDidMount() {
        this.setState({userName: "superAdmin"});
    }

    static getDerivedStateFromProps(props) {
        console.log('Get Derived State Properties called');
        return {
            pwd : props.pwd
        }
    }

    render() {
        return (
            <div className="App">
                <h1> {this.state.userName} </h1>
                <h2> {this.state.pwd} </h2>
            </div>
        ); 
    }
}

export default User
Update
While updating the component react will call some methods in order. They are

getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
getDerivedStateFromProps() and render() methods are same as above. So we will move to the next methods.

shouldComponentUpdate()
 This method will return a boolean value which tells the react to re render the component.

If this method returns true then the react will re-render the component.

If it returns false it won’t.

By default, this method will return true.

shouldComponentUpdate() {
    return true;
}
getSnapshotBeforeUpdate()

This method helps us to get the data of properties and state before updating the component.

This will helps us to check whether the properties and state are changed or not, also we can do comparisons checks.


 
If we include the getSnapshotBeforeUpdate method, then we have to include the componentDidUpdate method too. Otherwise, we will get an error.

getSnapshotBeforeUpdate(oldProps, oldState) {
    console.log(oldProps);
    console.log(oldState);
}
componentDidUpdate()
This method is similar to the componentDidMount method under the Mount process. This method will be called whenever the component is updated. This is like a document.load method in javascript.

componentDidUpdate() {
    console.log('Component Updated');
}

"Overall the code will be looks like the below";

import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : 'codewithstupid'
        };
    }
    shouldComponentUpdate() {
        return true;
    }
    getSnapshotBeforeUpdate(oldProps, oldState) {
        console.log(oldProps);
        console.log(oldState);
    }
    componentDidUpdate() {
        console.log('Component Updated');
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                userName : 'Genious'
            })
        }, 500);
    }
    render() {
        return (
            <div className="App">
                <h1> {this.state.userName} </h1>
            </div>
        ); 
    };
}

"export default User
Unmounting
This is the last lifecycle of a component. This lifecycle event has only one method which will be called when the component is about to be removed from the DOM";

componentWillUnmount() {
    console.log('Component is going to be removed');
}

In the below example we are having three classes user, user1, and user2.
User component will be responsible to render either user1 or user2.


We have one state property that will have the userId. The initial value of the userId will be 1 so it will show This is the first user. After 1 second we are changing the userId state into 2. So it will throw an alert window like the user is going to change after that User2 class will be rendered in the DOM.

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

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId : 1
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                userId : 2
            });
        }, 1000);
    }

    render() {
        var user = '';
        if(this.state.userId === 1) {
            user =   <User1></User1>
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

export default User
