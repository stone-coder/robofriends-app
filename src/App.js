import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';



class App extends Component  { // App is this - then use . to access that object of App
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }


    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }



    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if (this.state.robots.length === 0) {
            return <h1 className="tc f1" >Loading, Please wait</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1" >RoboFriends Searcher</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filteredRobots} />
                </div>
            );
        }
    }
}

export default App;