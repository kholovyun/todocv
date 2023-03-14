import React, { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react'
import { useDispatch } from 'react-redux';
import ITodoList from '../../interfaces/ITodoList'
import { addToDoList, getData } from '../../store/todo.slice';
import {useNavigate} from 'react-router-dom'
import TaskList from '../ToDoLIst/TaskList/TaskList';
import { v4 as uuidv4 } from 'uuid';
import './AddForm.css'



const AddForm:FunctionComponent = (): React.ReactElement => {
    const [newTodoList, setNewTodoList] = useState<ITodoList>({
        id: '',
        title: '',
        todos: []
    })
    const [newTask, setNewTask] = useState<string>('')
    const [isWrongInput, setIsWrongInput] = useState<boolean>(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const InputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === 'title')
        setNewTodoList((prev) => {return {...prev, title: e.target.value}})
        if(e.target.name === 'task')
        setNewTask(e.target.value)
    }
    const AddTask = (e: FormEvent) => {
        e.preventDefault()
        let copy = {...newTodoList}
        if(newTask === ''){
            setIsWrongInput(true)
            return
        }
        const addTask = {
            text: newTask,
            completed: 0
        }
        copy.todos.push(addTask)
        copy = {...copy, id: uuidv4() }
        setNewTodoList(copy)
        setNewTask('')
    }

    const createNewToDoList = () => {
        if(newTodoList.title === ''){
            setIsWrongInput(true)
            return
        }
        dispatch(addToDoList(newTodoList))
        dispatch(getData())
        navigate('/')
    }
  return (
    <div className='add_form_container'>
        <button 
            className='back_to_main'
            onClick={() => navigate('/')}>
                BACK TO MAIN PAGE
        </button>
        <div className='preview'>
            <div className='add_title'>
                <span style={{marginRight: "20px"}}>Title:</span>
                {newTodoList.title}
            </div>
            <div className='tasks_preview'>
                Tasks:
                <TaskList
                    tasks={newTodoList.todos}
                />
            </div>
        </div>
        <form className='form_block'>
            <input
                style={{border: isWrongInput? '2px solid red' : 'none'}}  
                onChange={InputHandler} 
                type="text" 
                name='title' 
                value={newTodoList.title} 
                placeholder='title...'
            />
        </form>
        <h3 className='add_title'>Add task</h3>
        <form 
            className='form_block' 
            onSubmit={AddTask}>
                <input
                    style={{border: isWrongInput? '2px solid red' : 'none'}} 
                    onChange={InputHandler} 
                    type="text" 
                    name='task' 
                    placeholder='task...'/>
                <button className='add_task_btn'>Add</button>
        </form>
        <button 
            className='create_btn'
            onClick={() => createNewToDoList()}>
                Create ToDO List
        </button>
    </div>
  )
}

export default AddForm
