import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import Tasks from './components/Tasks'
import NewTask from './components/NewTask'

class App extends Component {
  state = {
		tasks: []
  };
  
  addTask = (text, desc, important, date) => {
		const task = {
			id: this.counter,
      text,
      desc,
			date,
			important,
			active: true,
			finishDate: null
		};
		this.counter++;
		this.setState(prevState => ({
			tasks: [...prevState.tasks, task]
		}));

		return true;
  };
  
  render() {
    return (
      <MDBContainer>
        <MDBRow center className="mt-5">
          <MDBCol md="12" className="text-left mb-5">
            <h1 style={{fontSize:"200%"}}><span className="teal-text" style={{fontWeight:700}}>Aplikacja testowa</span> do tworzenia list zadań</h1>
            <p style = {{color: "#999", fontSize : "90%"}}>To jest aplikacja realizowana dzięki poradnikowi na potrzeby nauki ReactJS (komponenty, funkcje strzałkowe, stany). Skorzystałem z biblioteki <span className="teal-text"><b>Material Design Bootstrap</b></span>.</p>
            <hr/>
          </MDBCol>
          <MDBCol md="6" className="text-left">
            <NewTask add={this.addTask} />
          </MDBCol>
          <MDBCol md="6" className="text-left">
            <Tasks/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
