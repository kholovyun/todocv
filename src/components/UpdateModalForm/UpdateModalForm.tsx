import React, {useState} from 'react'
import ITask from '../../interfaces/ITask'
import IUpdateProps from './IUpdateProps'
import { v4 as uuidv4 } from 'uuid';
import './UpdateModalForm.css'
import { useDispatch, useSelector} from 'react-redux';
import { AppState } from '../../store/store';
import { updateToDoList } from '../../store/todo.slice';


const UpdateModalForm = (props: IUpdateProps) => {
  const {currentList} = useSelector((state: AppState) => state.todos)
  const [currentTasks, setCurrentTasks] = useState<ITask[]>(currentList.todos)
  
  const dispatch = useDispatch()

  const changeStatus = (index: number) => {
      const copyTask = {...currentTasks[index]}
      copyTask.completed = copyTask.completed === 1? 0 : 1
      const copyTasks = [...currentTasks]
      copyTasks.splice(index, 1, copyTask)
      setCurrentTasks(copyTasks)
  }
  const saveChanges = () => {
    dispatch(updateToDoList([currentList.id, currentTasks]))
    props.closeWin()
  }

  return (
    <div className='modal_win_bg'>
        <div className='modal_win'>
                {currentTasks.map((task, i) => {
                  const id = uuidv4()
                  return(
                        <div 
                            className={task.completed === 1? "update_completed" : "update_uncompleted"} 
                            key={id}
                        >
                              {task.text}
                        <button 
                            className='change_status_btn' 
                            onClick={() => changeStatus(i)}>
                            {task.completed === 1? "Open again" : "Done"}
                        </button>
                        </div>
                      )
                })}
                <div className='modal_controls'>
                  <button onClick={() => saveChanges()}>Update List</button>
                  <button onClick={() => props.closeWin()}>Cancel</button> 
                </div>
                         
        </div>
    </div>
   
  )
}

export default UpdateModalForm
