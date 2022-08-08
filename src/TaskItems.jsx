import React, {useContext} from 'react';
import { taskContext } from './taskContext';

const TaskItems = ()=>{
    const {taskItems, setTaskItems} = useContext(taskContext);
    const handleSetDoneTask = (id) =>{
        const index = taskItems.findIndex(t=>t.id===id);
        let newTaskItems = [...taskItems];
        newTaskItems[index].done = !newTaskItems[index].done;
        setTaskItems(newTaskItems)
    }
    const handleDeleteTast = (id) =>{
        let newTasks = taskItems.filter(t=>t.id!==id);
        setTaskItems(newTasks)
    }
    if(taskItems.length){
        return (
            <ul className="list-group m-0 p-0 mt-2">
                {
                    taskItems.map(t=>(
                        <li className={`list-group-item d-flex justify-content-between ${t.done ? "list-group-item-success" : "" }`}>
                            {t.done ? <del>{t.title}</del> : t.title}
                            <span>
                                {
                                    <i className={`me-3 pointer ${t.done ? "fas fa-times text-warning" : "fas fa-check text-success"}  transition_200 text_hover_shadow`} onClick={()=> handleSetDoneTask(t.id)}></i>
                                }
                                <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow" onClick={()=> handleDeleteTast(t.id)}></i>
                            </span>
                        </li>
                    ))
                }
            </ul>    
        )
    } else{
        return (
            <h4 className='text-center text-danger mt-4'>No tasks here yet!</h4>
        )
    }
}

export default TaskItems;