import React from 'react'
import './listitem.css'
import {toogleComplete} from '../../redux/reducers/todoReducer/todoSlice'
import {removeTodo} from '../../redux/reducers/todoReducer/todoSlice'

import { useDispatch } from "react-redux";
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useState } from 'react';

function ListItem({id , title, completed,todo}, ) {
    const [updatedata,setUpdatedata] =useState(null)
    const dispatch=useDispatch()
    const handleComplete=()=>{
        dispatch(
            toogleComplete({id:id ,completed: !completed})
        )
    }
    const handleDelete=()=>{
        dispatch(removeTodo({id:id}))
        console.log("sjdhsjd")
    }
    const updateData=()=>{
console.log(todo)
    }
  return (
    <div className='container'>
             <div className="listBox">
             <div className="todoTitle">
                 <input onChange={handleComplete} type='checkbox' checked={completed} />
                 <h7>{title}</h7>
                 </div>

                 <div className="listButon">
                     <button onClick={updateData}  >Edit</button>
                     <RiDeleteBin7Fill onClick={handleDelete} className='deleteIcon'/>
                 </div>

          </div>
    </div>
  )
}

export default ListItem