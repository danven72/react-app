import React from 'react';

/* Esempio di gestione di vita di un componente */
class ClickCounter extends React.Component{

	constructor(){

		super();
		this.state ={
			countClick:  0
		}		
	}	

  	addOne(e){
  		let n = ++this.state.countClick;
  		this.setState({
			countClick: n 
  		});
  	}

  	subOne(e){
  		let n = --this.state.countClick;
  		this.setState({
			countClick: n 
  		});
  	}

  	resetCounter(e)
  	{
  		this.setState({
  			countClick: 0
  		});
  	}

	render (){
	    return (
	      
	      <div id="clickCounter" className="panel panel-primary text-center">
		      <div className="btn-group btn-group-lg">
		      		<input type="button" className="btn btn-primary" onClick={this.addOne.bind(this)}  value="+ Click"/>
		      		<input type="button" className="btn btn-primary" onClick={this.subOne.bind(this)}  value="- Click"/>
		      		<input type="button" className="btn btn-primary" onClick={this.resetCounter.bind(this)}  value="Reset"/>
		      </div>
		      <div className="col">
		      	<h2>You clicked the button: {this.state.countClick} times</h2>
		      </div>
	      </div>
	    )
    }
}

export default ClickCounter;