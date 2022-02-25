import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageReports } from './pages/PageReports';
import { PageAbout } from './pages/PageAbout';

function App() {
	return (
		<div className="App">
			<h1>react-router site</h1>
			<PageWelcome />
			<PageReports />
			<PageAbout />
		</div>
	);
}

export default App;