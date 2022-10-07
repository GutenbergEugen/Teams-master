import React from 'react'
import { useContext } from 'react';
import User from '../../components/User';
import { Context } from '../../context';
import s from './index.module.css';


export default function TeamsPage() {

const { users } = useContext(Context);

  return (
    <div>
        {
            users.length === 0
            ? 'No users'
            : users.map(el => <User key={el.id} {...el}/>)
        }
    </div>
  )
}
