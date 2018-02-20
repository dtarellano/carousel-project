import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

const RenderApp = () => {
	render(<App />, document.getElementById('app'));
};

RenderApp();
