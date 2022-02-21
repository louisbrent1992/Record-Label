import Home from "./Pages/Home";
import Artists from "./Pages/Artists";
import Music from "./Pages/Music";
import News from "./Pages/News";
import Store from "./Pages/Store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Demos from "./Pages/Demos";
import NoMatch from "./Pages/NoMatch";
import Videos from "./Pages/Videos";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/artists">
					<Artists />
				</Route>
				<Route path="/music">
					<Music />
				</Route>
				<Route path="/videos">
					<Videos />
				</Route>
				<Route path="/news">
					<News />
				</Route>
				<Route path="/store">
					<Store />
				</Route>
				<Route path="/demos">
					<Demos />
				</Route>
				<Route>
					<NoMatch />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
