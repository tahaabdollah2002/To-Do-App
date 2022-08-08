import React, {useState, useContext, useEffect, useRef} from 'react';
import { taskContext } from './taskContext';

const TopForm = ()=>{
    const [task, setTask] = useState('');
    const {taskItems, setTaskItems} = useContext(taskContext);
    const handleSetTask = (event) =>{
        setTask(event.target.value)
    }
    const handleAddTask = (event) =>{
        if(task==='' || task===null){
            event.preventDefault()
            alert('No tasks have been written')
        }
        else if (task.length<5) {
            event.preventDefault()
            let formText = document.querySelector('.form-text');
            formText.classList.add('form_text_shadow')
        }
            else {
                event.preventDefault()
                setTaskItems([...taskItems, {id: Math.random(), title: task, done: false}])
                setTask('')
        }
    }
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
        return () => {};
    }, []);
    return(
        <React.Fragment>
            <h4 className="text-center text-info text_shdow">To-Do Application</h4>
            <form onSubmit={handleAddTask}>
                <div className="form-group d-flex">
                    <input type="text" className="form-control me-1" value={task} ref={inputRef} onChange={handleSetTask} />
                    <button type="submit" className="btn btn-success">Add</button>
                </div>
                    {task.length<5 ? <p className='form-text text-danger ms-2 mt-1'>Please inter at least 5 characters.</p> : ''}
            </form>
        </React.Fragment>
    )
}

export default TopForm;