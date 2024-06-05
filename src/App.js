import "./App.css";
import "./index.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Career from "./components/Career/Career";

function App() {
	return (
		<div className="App">
			<Header />
			<About />
			<Career />
		</div>
	);
}

export default App;
