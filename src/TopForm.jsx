import React from 'react';

const TopForm = ()=>{
    return(
        <React.Fragment>
            <h4 className="text-center text-info text_shdow">To-Do Application</h4>
            <form>
                <div className="form-group d-flex">
                    <input type="text" className="form-control" />
                    <button type="submit" className="btn btn-success me-1">ثبت</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default TopForm;