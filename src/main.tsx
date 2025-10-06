import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Ensure this matches the id in your index.html
const rootElement = document.getElementById('root');

if (!rootElement) {
throw new Error('Root element not found. Make sure index.html has <div id="root"></div>');
}

ReactDOM.createRoot(rootElement as HTMLElement).render(
<React.StrictMode> <App />
</React.StrictMode>
);
