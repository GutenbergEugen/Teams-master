import React, { useContext } from 'react';
import AddTeamForm from '../../components/AddTeamForm';
import AddUserForm from '../../components/AddUserForm';
import { Context } from '../../context';
import s from './index.module.css';

export default function ConfigurationsPage() {

const { teams, addTeam } = useContext(Context);

  return (
    <div>
        <AddTeamForm />
        <AddUserForm />

    </div>
  )
}
