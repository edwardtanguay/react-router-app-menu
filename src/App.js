import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageReports } from './pages/PageReports';
import { PageAbout } from './pages/PageAbout';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';

function App() {
	return (
		<div className="App">
			<h1>react-router site</h1>
			<Nav/>
			<Routes>
				<Route path="/" element={<PageWelcome />}/>
				<Route path="/reports" element={<PageReports />}/>
				<Route path="/about" element={<PageAbout />}/>
			</Routes>
		</div>
	);
}

export default App;