import Nav from '../Nav';
import { Routes, Route } from 'react-router-dom';
import ConfigurationsPage from '../../pages/ConfigurationsPage';
import TeamsPage from '../../pages/TeamsPage';
import { Context } from '../../context';
import { useState } from 'react';

function App() {

  const [ teams, setTeams ] = useState([]);
  const [ users, setUsers ] = useState([]);
 
  const addTeam = (value) => {
    setTeams([...teams, { value, label: value}])
  }

  const addUser = (name, team) => {
    setUsers(
      [...users, {
        id: Date.now(),
        name,
        team
      }]
    )
  }

  const deleteUser = (id) => {
    setUsers(users.filter(elem => elem.id !== id))
  };

  return (
    <div>
      <Context.Provider value={{ teams, users, addTeam, addUser, deleteUser }}>
        <Nav />
        <Routes>
          <Route path='/configurations' element={ <ConfigurationsPage  /> } />
          <Route path='/teams' element={ <TeamsPage /> } />
        </Routes>
      </Context.Provider>
    
    </div>
  );
}

export default App;
