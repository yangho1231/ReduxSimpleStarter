import React, { Component } from 'react';
//{ Component } same as const Component = React.Component
//Only Class component class has state not in funcitonal class
//All Javascript function has constructor function
//Parent class Component you can called that by using super(props)
//Beside constructor function this.state should be this.setState
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }
    render() {
        return ( 
            <div>
                <input onChange={event => this.setState({ term: event.target.value })} />
                Value of the input: { this.state.term }
            </div>
        );
    }
}

export default SearchBar;