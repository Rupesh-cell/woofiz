import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";


const App = () => {
	const user= true;
	return (
		<>
			<Router>
				
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/home" element={<Home />} />
				</Routes>
			</Router>
		
		</>
	);
};

export default App;
