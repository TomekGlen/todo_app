import React from 'react';

const Tasks = props => {

	return(
        <div>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-title">
                        <h4>Lista aktywnych zadań</h4>
                    </div>
                    <hr/>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-title">
                        <h4>Zadania zakończone</h4>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    )
};

export default Tasks;