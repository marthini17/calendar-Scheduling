// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
	const eventData = useState({
		email: 'email',
		password: 'password',
	  });
	
	//   const handleInputChange = (e) => {
	// 	const { name, value } = e.target;
	// 	setEventData((prevData) => ({ ...prevData, [name]: value }));
	//   };
	
	  const handleAddEvent = async () => {
		try {
		  const response = await fetch('http://localhost:3000/app', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(eventData),
		  });
	
		  const result = await response.json();
		  console.log(result);
		} catch (error) {
		  console.error('Error adding event:', error);
		}
	  };
	  const [email, setEmail] = useState('');
	  const [password, setPassword] = useState('');
	  const [serverResponse, setServerResponse] = useState('');
	
	  const handleSubmit = async () => {
		try {
		  const response = await fetch('http://localhost:3000/app', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			}, body: JSON.stringify({ email, password }),
		});

			const data = await response.json();
	  
			// Assuming your server sends a message in the response
			setServerResponse(data.message);
			document.getElementById('server').innerHTML={serverResponse}
		  } 
		  catch (error) {
			console.error('Error submitting data:', error);
		  }
		};
  return (
    <div className="App">
      
    <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Calendar</h2>
                                      
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="content w-100">
				    <div className="calendar-container">
				      <div className="calendar"> 
				        <div className="year-header"> 
				          <span className="left-button fa fa-chevron-left" id="prev"> </span> 
				          <span className="year" id="label"></span> 
				          <span className="right-button fa fa-chevron-right" id="next"> </span>
				        </div> 
				        <table className="months-table w-100"> 
				          <tbody>
				            <tr className="months-row">
				              <td className="month">Jan</td> 
				              <td className="month">Feb</td> 
				              <td className="month">Mar</td> 
				              <td className="month">Apr</td> 
				              <td className="month">May</td> 
				              <td className="month">Jun</td> 
				              <td className="month">Jul</td>
				              <td className="month">Aug</td> 
				              <td className="month">Sep</td> 
				              <td className="month">Oct</td>          
				              <td className="month">Nov</td>
				              <td className="month">Dec</td>
				            </tr>
				          </tbody>
				        </table> 
				        
				        <table className="days-table w-100"> 
						<thead></thead>
						<tbody>
						<tr>
				          <td className="day">Sun</td> 
				          <td className="day">Mon</td> 
				          <td className="day">Tue</td> 
				          <td className="day">Wed</td> 
				          <td className="day">Thu</td> 
				          <td className="day">Fri</td> 
				          <td className="day">Sat</td>
						  </tr></tbody><tfoot></tfoot>
				        </table> 
				        <div className="frame"> 
				          <table className="dates-table w-100"> 
			              <tbody className="tbody">             
			              </tbody> 
				          </table>
				        </div> 
				        <button className="button" id="add-button">Add Event</button>
				      </div>
				    </div>
				    <div className="events-container">
				    </div>
				    <div className="dialog" id="dialog">
				        <h2 className="dialog-header"> Add New Event </h2>
                                        <form className="form" id="form" action="newjsp.jsp" >
				          <div className="form-container" align="center">
				            <label className="form-label" id="valueFromMyButton" htmlFor="name">Event name</label>
				            <input className="input" type="text" id="name"  name="email" maxLength="36"/>
				            <label className="form-label" id="valueFromMyButton" htmlFor="count">Time</label>
				            <input className="input" type="text" name="password"id="count" />
				            <input type="button" value="Cancel" className="button" id="cancel-button"/>
				            <input type="button" onClick={handleAddEvent} value="OK" className="button button-white" id="ok-button"/>
				          </div>
				        </form>
						<p id="server"></p>
				      </div>
				  </div>
				</div>
			</div>
		</div>
	</section>
	
 
	</div>
  );
}

export default App;
