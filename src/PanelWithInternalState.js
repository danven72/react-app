import React from 'react';

class PanelWithInternalState extends React.Component{

	/* Esempio di creazione dello stato di un componente */
	constructor(){

		super();
		this.state ={
			myState: 'This is my state',
		}
	}	

    update(e){
  	  this.setState({myState: e.target.value})
    }


  render (){
    return (
      <div id="panelWithInternalState" className="panel panel-primary">
      	<p>State is: <b>{this.state.myState}</b> </p>
      	<label for="inputState">Write new State here:  </label>
      	<input className="form-control" id="inputState" type="text" onChange={this.update.bind(this)} />
      </div>
    )
  }
}



export default PanelWithInternalState;