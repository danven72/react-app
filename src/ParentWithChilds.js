import React from 'react';

class ParentWithChilds extends React.Component{
	
	constructor(){

		super();
		this.state ={
			textToDisplay: 'No Input'
		}
	}	

    updateDisplay(e){
  	  this.setState({textToDisplay: e.target.value});
    }

    resetText(e){
    	this.setState({textToDisplay: "No Input"});
    }

    render (){
	    return (
	      <div id="parentWithChilds" className="panel panel-primary">
	      	<form>
		      	<p>State is: <b>{this.state.textToDisplay}</b> </p>
		      	<div class="form-group row">
		      		<div class="col-xs-3">
			      		<Widget c={this.updateDisplay.bind(this)}  />
			      	</div>
			      	<div class="col-xs-3">
			      		<Widget c={this.updateDisplay.bind(this)}  />
			      	</div>
			      	<div class="col-xs-3">
			      		<Widget c={this.updateDisplay.bind(this)}  />
			      	</div>
		      	</div>
				<div className="container text-center">
		      		<p>&nbsp;</p>
		      		<ResetButton pb={this.resetText.bind(this)}> Clear All <RecycleSpan/> </ResetButton>
		      	</div>
		      </form>
	      </div>
	    )
	  }
	}

const Widget = (props) =>
	<input className="form-control" type="text" onChange={props.c} value={props.inputText}  />


//const ResetButton = (props) => <button>{props.children}</button>

class ResetButton extends React.Component{
	

	render(){
		return <button type="reset" onClick={this.props.pb} className="btn btn-primary">{this.props.children}</button>
	}
}


const RecycleSpan = () => <span>&#x267B;</span>


export default ParentWithChilds;