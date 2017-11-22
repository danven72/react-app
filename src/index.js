import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import HelloPanel from './HelloPanel';
import PanelWithInternalState from './PanelWithInternalState';
import ClickCounter from './ClickCounter';
import ParentWithChilds from './ParentWithChilds'

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
	[
		<Clock />,
		<HelloPanel txt="This String is a parameter" />, 
		<PanelWithInternalState />,
		<ClickCounter />
	], 
	document.getElementById('root')
);


ReactDOM.render(
	<ParentWithChilds />, 
	document.getElementById('root2')
);
