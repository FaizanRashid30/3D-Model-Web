import Home from "./pages/Home";
import Customizer from "./pages/Customizer";
import Canvas from "./canvas";

function App() {
	return (
		<main className="app transition-allease-in">
			<Home />
			<Canvas />
			<Customizer />
		</main>
	);
}

export default App;
