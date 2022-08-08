import React, {useState} from 'react';
import TaskItems from './TaskItems';
import TopForm from './TopForm';
import { taskContext } from './taskContext';

const App = ()=>{
    const [taskItems, setTaskItems] = useState([])
    return (
        <div className="container w-100 h-100 p-3">
            <div className="row h-100 justify-content-center align-align-items-start">
                <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h_fit">
                    <taskContext.Provider value={{
                        taskItems,
                        setTaskItems
                    }}>
                        <TopForm />
                        <TaskItems />
                    </taskContext.Provider>
                </div>
            </div>
        </div>
    ) 
}

export default App;