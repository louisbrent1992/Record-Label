import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./Pages/NoMatch";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route>
					<NoMatch />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
