import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

function App(){
    
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchField] = useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => setRobots(users))
    }, []);
    
    const onSearchChange = (event) =>{
        setSearchField(event.target.value)
    }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return(
        <div className ='tc'>
            <h1 className='f2'>Robofriends</h1>
            <Searchbox searchChange={onSearchChange}></Searchbox>

            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>

        </div>
    );
    
}
export default App;