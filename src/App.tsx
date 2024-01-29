import SideNav from "./components/SideNav.tsx";
import Header from "./components/Header.tsx";
import Resume from "./pages/Resume.tsx";

function App() {
	return (
		<div>
			<SideNav />
			<main>
				<Header />
				<Resume />
			</main>
		</div>
	);
}

export default App;
