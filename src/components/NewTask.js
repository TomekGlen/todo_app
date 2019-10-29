import React, { Component } from "react";
import {MDBBtn, MDBIcon } from 'mdbreact';

class NewTask extends Component {
    minDate = new Date().toISOString().slice(0, 10); //data formatu 'rrrr-mm-dd'

    state = {
        value: "",
        desc: "",
		checked: false,
		date: this.minDate
    };
    
    handleChange = e => {
		const id = e.target.id;

		if (id === "formTitle") {
			this.setState({
                value: e.target.value,
			});
		} else if (id === "formDesc") {
			this.setState({
                desc: e.target.value,
            });
        }  else if (id === "checkboxForm") {
			this.setState({
				checked: e.target.checked
            });
        }else if (id === "formDate") {
                this.setState({
                    date: e.target.value
                });
		}
    };  
    
    handleSubmit = e => {
		e.preventDefault();
    };
    
    handleClick = () => {
        const {value, desc, checked, date} = this.state;
        const add = this.props.add(value, desc, checked, date);

        if(add){
            this.setState({
                value: "",
                desc: "",
                checked: false,
                date: this.minDate
            });
        }
    }
    
	render() {
        return (
        <div className="form mb-4" style={{border:"1px solid #EEE", padding:"20px", background:"#F8F8F8"}}>
                    <h4>Dodaj nowe zadanie</h4>
                <hr/>
                <div className="mb-2">
                    <label htmlFor="formTitle" className="grey-text" style={{fontSize:"80%"}}>Nazwa zadania</label>
                    <input
                        type="text"
                        id="formTitle"
                        className="form-control"
                        value = {this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="formDesc" className="grey-text" style={{fontSize:"80%"}}>Opis zadania</label>
                    <textarea
                        type="text"
                        id="formDesc"
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.state.desc}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="formDate" className="grey-text" style={{fontSize:"80%"}}>Termin zadania</label>
                    <input
                        type="date"
                        id="formDate"
                        className="form-control"
                        min={this.minDate}
                        value={this.state.date}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="custom-control custom-checkbox">
                    <input 
                        type="checkbox" 
                        className="custom-control-input" 
                        id="checkboxForm"
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                    <label className="custom-control-label" htmlFor="checkboxForm" style={{fontSize:"90%",paddingTop:"2px"}}>Wysoki priorytet</label>
                </div>

                <div className="text-left mt-4">
                <p style = {{color: "#999", fontSize : "80%"}}>Klikając poniższy przycisk - zadanie które chcesz dodać będzie widoczne na liście zadań do zrealizowania.</p>

                    <MDBBtn className="btn btn-teal ml-0" onClick={this.handleClick}>
                        Dodaj nowe zadanie
                        <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                </div>
        </div>
        )
    }
};

export default NewTask;