import React, { Component } from 'react';
//{ Component } same as const Component = React.Component
class SearchBar extends Component {
    render() {
        return <input onChange={event => console.log(event.target.value)} />;
    }

}

export default SearchBar;