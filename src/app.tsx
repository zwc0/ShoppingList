import React from 'react';
import {HashRouter, Routes, Route, Link} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import Home from './pages/Home';

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js');
};

const App = () => {
    return (
        <Home />
    );
}

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(<App />);