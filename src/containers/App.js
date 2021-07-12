import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSearchField,requestRobots} from '../actions';
import Searchbox from '../components/Searchbox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

const mapStateToProps=state =>{
    return{
        searchField: state.searchRobots.searchField,
        isPending: state.requestRobots.isPending,
        robots:state.requestRobots.robots,
        error:state.requestRobots.error
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
        onRequestRobots:()=>dispatch(requestRobots())
    }
}


class App extends Component {


    componentDidMount(){
        this.props.onRequestRobots();
    }

    render(){
        const {searchField, onSearchChange, robots,isPending}=this.props;
        const filterRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return isPending ?
        <h1>Loading</h1>:
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <Searchbox searchchange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots} />
                    </ErrorBoundry> 
                </Scroll>
            </div>);  
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(App);