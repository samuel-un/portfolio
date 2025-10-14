import "./styles/variables.css";
import "./styles/base.css";
import "./styles/layout.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";

export default function App() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<About />
				<Stacks />
				<Projects />
			</main>
		</>
	);
}
