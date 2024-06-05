import "./App.css";
import "./index.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";

function App() {
	return (
		<div className="App">
			<Header />
			<About />
			<Skills />
			<Experience />
		</div>
	);
}

export default App;
