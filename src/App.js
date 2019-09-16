import React, {Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';



class App extends Component  { // App is this - then use . to access that object of App
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }



    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>RoboFriends Searcher</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>

        )
    }
}

export default App;