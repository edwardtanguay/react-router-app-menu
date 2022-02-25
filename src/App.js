import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageReports } from './pages/PageReports';

function App() {
	return (
		<div className="App">
			<h1>react-router site</h1>
			<PageWelcome />
			<PageReports />
		</div>
	);
}

export default App;