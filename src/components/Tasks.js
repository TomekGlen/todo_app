import React from 'react';

const Tasks = props => {

	return(
        <div>
            <div className="mb-4" style={{border:"1px solid #EEE", padding:"20px"}}>
                <h4>Lista aktywnych zadań</h4>
                <hr/>
            </div>
            <div className="mb-4" style={{border:"1px solid #EEE", padding:"20px"}}>
                <h4>Zadania zakończone</h4>
                <hr/>
            </div>
        </div>
    )
};

export default Tasks;