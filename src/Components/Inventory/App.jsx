// // Filename - App.js

import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

// import { useState } from "react";
// // import "./App.css";
// // import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
// 	const [userinfo, setUserInfo] = useState({
// 		languages: [],
// 		response: [],
// 	});

// 	const handleChange = (e) => {
// 		// Destructuring
// 		const { value, checked } = e.target;
// 		const { languages } = userinfo;

// 		console.log(`${value} is ${checked}`);

// 		// Case 1 : The user checks the box
// 		if (checked) {
// 			setUserInfo({
// 				languages: [...languages, value],
// 				response: [...languages, value],
// 			});
// 		}

// 		// Case 2 : The user unchecks the box
// 		else {
// 			setUserInfo({
// 				languages: languages.filter(
// 					(e) => e !== value
// 				),
// 				response: languages.filter(
// 					(e) => e !== value
// 				),
// 			});
// 		}
// 	};
// 	console.log(userinfo);
// 	console.log(userinfo.languages);

// 	return (
// 		<>
// 			<div className="container-fluid top ">


// 				<div className="container mt-5 pb-5 pt-5">
// 					<h3 className="form-head-contact-h3 ">
// 						Your programming expertise lies in
// 						what languages?{" "}
// 					</h3>

// 					<form>
// 						<div className="row">
// 							<div className="col-md-6">
// 								<div className="form-check m-3">
// 									<input
// 										className="form-check-input"
// 										type="checkbox"
// 										name="languages"
// 										value="Javascript"
// 										id="flexCheckDefault"
// 										onChange={
// 											handleChange
// 										}
// 									/>
// 									<label
// 										className="form-check-label"
// 										htmlFor="flexCheckDefault"
// 									>
// 										Javascript
// 									</label>
// 								</div>
// 								<div className="form-check m-3">
// 									<input
// 										className="form-check-input"
// 										type="checkbox"
// 										name="languages"
// 										value="Python"
// 										id="flexCheckDefault"
// 										onChange={
// 											handleChange
// 										}
// 									/>
// 									<label
// 										className="form-check-label"
// 										htmlFor="flexCheckDefault"
// 									>
// 										Python
// 									</label>
// 								</div>
// 								<div className="form-check m-3">
// 									<input
// 										className="form-check-input"
// 										type="checkbox"
// 										name="languages"
// 										value="Java"
// 										id="flexCheckDefault"
// 										onChange={
// 											handleChange
// 										}
// 									/>
// 									<label
// 										className="form-check-label"
// 										htmlFor="flexCheckDefault"
// 									>
// 										Java
// 									</label>
// 								</div>
// 							</div>
// 						</div>

// 						<div className="form-control mt-3 mb-3 text-center">
// 							<label htmlFor="exampleFormControlTextarea1">
// 								You're proficient in the
// 								following languages :{" "}
// 							</label>
// 							<textarea
// 								className="form-control text"
// 								name="response"
// 								value={userinfo.response}
// 								placeholder="The checkbox values will be displayed here "
// 								id="floatingTextarea2"
// 								style={{ height: "150px" }}
// 								onChange={handleChange}
// 							></textarea>
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default App;

const App = () => {
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
			<TabList className="tabs tabs-boxed">
				<Tab className="tab">Title 1</Tab>
				<Tab className="tab">Title 2</Tab>
			</TabList>
			<TabPanel>1</TabPanel>
			<TabPanel>2</TabPanel>
		</Tabs>
	);
};

export default App;
{/* <div className="tabs tabs-boxed">
  <a className="tab">Tab 1</a>
  <a className="tab tab-active">Tab 2</a>
  <a className="tab">Tab 3</a>
</div> */}
