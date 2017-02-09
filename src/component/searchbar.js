import React, { Component } from 'react';
//{ Component } same as const Component = React.Component
//Only Class component class has state not in funcitonal class
//All Javascript function has constructor function
//Parent class Component you can called that by using super(props)
//Beside constructor function this.state should be this.setState
//The state should tell input what to change not other way around
//Instead of <input onChange={event => this.setState({ term: event.target.value })} />
//You should set value={this.state.term} which makes onChange trigger event and not render.

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }
    render() {
        return ( 
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} 
                />
            </div>
        );
    }
}

export default SearchBar;