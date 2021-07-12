# Get Started with Creating React App
```node.js 
npm install
npm start
```

# Key Points of Redux

1. Action => set each constant with type & payload
2. Reducer => set state and function
3. Store => connect with action & reducer 

   * `{mapStateToProps, mapDispatchToProps}`
   * `{useSelector, useDispatch}`

4. Make changes

# Packages

```
npm install redux 
npm install react-redux
npm install redux-logger
npm install redux-thunk
```


# Redux with React Hooks

1. revise import libraries for '~/container/App.js' 

```node.js 
import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
```


2. revise code for '~/container/App.js' 
```node.js
const App=() => {
    const { searchField } = useSelector((state) => state.searchRobots); 
    const { robots, isPending, error } = useSelector((state) => state.requestRobots);
    const dispatch = useDispatch();
    const onSearchChange = (event) => {dispatch(setSearchField(event.target.value))};

    useEffect(() =>  {
        dispatch(requestRobots());
    }, [dispatch])
    
    const filterRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());})
    
    if (isPending) return <h1>Loading</h1>
    if (!error) 
        return(
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
    
export default App;

```
