import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import ITaskListProps from './ITaskListProps';

const TaskList = (props: ITaskListProps) =>  {
  return (
    <div className='todos_block'>
        {props.tasks?.map(task => {
            const id = uuidv4()
             return(
                 <label key={id} className="todo_list_item">
                     <span>{task.text}</span>
                     <input 
                        onChange={()=> {}} type='checkbox' 
                        checked={task.completed === 1?  true : false}/>
                 </label>
             )
          })}
      </div>
  )
}

export default TaskList