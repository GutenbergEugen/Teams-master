import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../../context';



export default function User({ name, team, id }) {

  const { deleteUser } = useContext(Context);

  return (
    <div className={s.user} onDoubleClick={()=>deleteUser(id)}>
        <p className={s.name}>{ name }</p>
        <p className={s.team}>{ team }</p>

    </div>
  )
}
