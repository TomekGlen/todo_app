import React from 'react';

const Task = props =>{
    return(
        <div style={{padding:"15px", border:"1px dotted #EEE"}}>
            <p className="text-right mb-0" style={{fontSize:"80%", color:"#555"}}>Data zgłoszenia</p>
            <h5>Nagłówek</h5>
            <p className=" mb-1" style={{fontSize:"80%", color:"#AAA"}}>Data zgłoszenia</p>
            <p style={{fontSize:"80%"}}>Treść</p>
            <button type="button" className="btn btn-sm btn-teal">ZAKOŃCZ</button>
            <button type="button" className="btn btn-sm btn-warning">USUŃ</button>
        </div>
    )
}

export default Task