import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ToDoList from '../../components/ToDoLIst/ToDoList';
import { AppState } from '../../store/store';
import {useNavigate} from 'react-router-dom';
import './ToDoApp.css'
import { getData } from '../../store/todo.slice';

const ToDoApp: FunctionComponent = (): React.ReactElement => {
const navigator = useNavigate()
const dispatch = useDispatch()
useEffect(() => {
  dispatch(getData())
}, [dispatch])
const {todos} = useSelector((state: AppState) => state.todos)
  return (
    <div className='container'>
       <ToDoList
            todos={todos!}
       />
        <button
            className='add_btn' 
            onClick={() => navigator('/add-form')}>
              CREATE NEW LIST        
        </button>
    </div>
  )
}

export default ToDoApp
