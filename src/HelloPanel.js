import React from 'react';
import PropTypes from 'prop-types'; //lo importo se voglio definire le propTypes

//Sintassi 1
//const HelloPanel = () => <h1>Hello React funziona</h1>


//Sintassi 2
class HelloPanel extends React.Component{

  render (){
    let txt = this.props.txt;
    let num = this.props.cat;
    return (
      <div id="helloPanel" className="panel panel-primary">
        <h1>Hello REaqct JS</h1>
        <b>{txt}</b> number cat is: <b>{num}</b>
      </div>
    )
  }
}


// Sintassi 3
/*
class HelloPanel extends React.Component{
  render(){
    return React.createElement('h1',null,'Hello Eggheads');
  }
}
*/


/*
Per un componente è possibile definire che tipologia di properties ci si aspetta (importare prop-types)
*/
HelloPanel.propTypes = {
  txt: PropTypes.string.isRequired,
  cat: PropTypes.number.isRequired
}

/* a cat è impostato un valore di default */
HelloPanel.defaultProps = {
  cat: 999
}

export default HelloPanel;
