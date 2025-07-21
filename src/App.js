import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox'
import './App.css'
import Scroll from './Scroll'


class App extends Component {
    constructor() {
        super()
        this.state = {
          robots: [],
          searchfield: ''
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({robots: users }));
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
       
    }
    
    render() {
        const filteredRobot = this.state.robots.filter((robot) => {
          return robot.name
            .toLowerCase()
            .includes(this.state.searchfield.toLowerCase());
        });
        if (this.state.robots.length === 0) {
            return (
              <div>
                    <h1 className="flex justify-center items-center h-100">
                        Loading....
                </h1>
              </div>
            );
        }
        else {
            return (
              <div className="tc">
                <h1 className="f1"> RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                  <CardList robots={filteredRobot} />
                </Scroll>
              </div>
            );
        }
    }
    
}
export default App