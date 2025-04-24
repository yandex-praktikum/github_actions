import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import './styles.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
	<StrictMode>
		<BrowserRouter
			basename={process.env.PUBLIC_PATH ? process.env.PUBLIC_PATH : '/'}>
			<App />
		</BrowserRouter>
	</StrictMode>
);
