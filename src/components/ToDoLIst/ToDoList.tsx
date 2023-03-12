import React, { FunctionComponent, useState } from 'react'
import ITodoListProps from './ITodoListProps'
import { v4 as uuidv4 } from 'uuid';
import TaskList from './TaskList/TaskList';
import { useDispatch } from 'react-redux';
import { deleteToDoList, selectToDoList } from '../../store/todo.slice';
import UpdateModalForm from '../UpdateModalForm/UpdateModalForm';
import ITodoList from '../../interfaces/ITodoList';
import './ToDoList.css'

const ToDoList:FunctionComponent<ITodoListProps>= (props): React.ReactElement => {

  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false)

  const update = (item: ITodoList) => {
      dispatch(selectToDoList(item))
      setShowUpdateModal(true)
  }
 
  const close = () => {
      setShowUpdateModal(false)
  }

  const dispatch = useDispatch()
  return (
    <div className='todo_container'>
        {
            props.todos?.map((item, i) => {
            const id = uuidv4()
            return(
                <div key={id} className="todo_list">
                    <div className='modal_controls'>
                        <button 
                            onClick={() => update(item)}>
                              <i className="fa-solid fa-pen-to-square">edit</i>
                        </button>
                        <button 
                            className='def_btn' 
                            onClick={() => dispatch(deleteToDoList(i))}>
                              <i className="fa-solid fa-trash"></i>
                        </button>   
                    </div>
                    <h3 className='title'>{item.title}</h3>
                    <TaskList
                      tasks={item.todos}
                    /> 
                </div>
            )
        })   
      }
      {
        showUpdateModal?
          <UpdateModalForm
              closeWin = {close}
          />
        :
        null 
    }
    </div>
  )
}

export default ToDoList