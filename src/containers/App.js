import React, {Component} from 'react';
import Searchbox from '../components/Searchbox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';




class App extends Component {

    constructor(){
        super()
        this.state={
            // robots: robots,
            robots: [ ],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // empty object
        // .then(user => this.setState({}));
        .then(users => this.setState({robots:users}));  
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const {robots,searchfield}=this.state;

        const filterRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots.length ?
        <h1>Loading</h1>:
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <Searchbox searchchange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots} />
                    </ErrorBoundry> 
                </Scroll>
            </div>);  
    }
    
}

export default App;