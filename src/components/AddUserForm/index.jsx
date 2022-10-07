import React from 'react';
import Select from 'react-select';
import s from './index.module.css';
import { Context } from '../../context';
import { useContext } from 'react';

export default function AddUserForm() {

const { teams, addUser } = useContext(Context);

const submit = event => {
    event.preventDefault();
    const { name, team } = event.target;
    addUser(name.value, team.value);
    name.value = '';
    team.value = ''; 
}

  return (
    <div className={s.user_form_container}>
        <p>Add user</p>
        <form className={s.user_form} onSubmit={submit}>
            <input type="text" placeholder='Name' name='name' />
            <Select options={teams} name='team'/>
            <button>Add</button>
        </form>
    </div>
  )
}
