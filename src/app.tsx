import React from 'react';
import {HashRouter, Routes, Route, Link} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import Home from './pages/Home';
import PWABanner from './components/PWABanner';

const App = () => {
    return (<>
        <Home />
        <PWABanner />
    </>);
}

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(<App />);