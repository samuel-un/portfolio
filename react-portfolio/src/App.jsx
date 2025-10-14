import "./styles/variables.css";
import "./styles/base.css";
import "./styles/layout.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<About />
				<Stacks />
				<Projects />
				<Contact />
				<Footer />
			</main>
		</>
	);
}
