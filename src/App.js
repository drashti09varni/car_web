// App.js
import React, { Fragment } from 'react';
import Header from '../src/Components/Header';
import HeroImage from './Components/HeroImage';
function App() {
	return (
		<Fragment>
			<Header />
			{/* <div style={{ overflowY: "scroll", height: "800px" }}></div> */}
			<HeroImage />
		</Fragment>
	);
}

export default App;
