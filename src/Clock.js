import React from 'react';

/* Esempio di gestione di vita di un componente */
class Clock extends React.Component{

	constructor(){

		super();
		this.state ={
			theDate: new Date()
		}
	}	

	/* Richiamato quando il componente è stato renderizzato */
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
  	}

  	/* Richiamato quando il componente è rimosso dal DOM */
  	componentWillUnmount() {
		clearInterval(this.timerID);
  	}


    tick() {
		this.setState({
	      theDate: new Date()
	    });
	 }

	render (){
	    return (
	      <div id="clock" className="row panel panel-primary text-right">
	      	<div className="col-sm">
	      		<h2>Time is <b>{this.state.theDate.toLocaleTimeString()}</b></h2>
	      	</div>
	      </div>
	    )
  }

}

export default Clock;