import React from 'react';
import {MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle } from 'mdbreact';


const NewTask = props => {
    const style = {
        color: "red"
    }

	return(
        <MDBCard style={{fontWeight:"300"}}>
            <MDBCardBody>
                <MDBCardTitle>
                    <h4>Dodaj nowe zadanie</h4>
                </MDBCardTitle>
                <hr/>
                <div className="mb-2">
                    <label htmlFor="formTitle" className="grey-text" style={{fontSize:"80%"}}>Nazwa zadania</label>
                    <input
                        type="text"
                        id="formTitle"
                        className="form-control"
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="formDesc" className="grey-text" style={{fontSize:"80%"}}>Opis zadania</label>
                    <textarea
                        type="text"
                        id="formDesc"
                        className="form-control"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="formDate" className="grey-text" style={{fontSize:"80%"}}>Termin zadania</label>
                    <input
                        type="date"
                        id="formDate"
                        className="form-control"
                    />
                </div>
                <div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="checkboxForm"/>
                        <label class="custom-control-label" for="checkboxForm" style={{fontSize:"90%",paddingTop:"2px"}}>Wysoki priorytet</label>
                    </div>
                </div>
                <div className="text-left mt-3">
                    <MDBBtn className="btn btn-teal ml-0" type="submit">
                        Dodaj nowe zadanie
                        <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                </div>
            </MDBCardBody>
        </MDBCard>
    )
};

export default NewTask;