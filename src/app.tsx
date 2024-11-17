import {render} from 'preact';
import Home from './pages/Home';
import PWABanner from './components/PWABanner';
import { ThemeProvider } from './context/ThemeContext';
import { tryParseJson } from './utils/utils';

const App = () => {
    return (
        <ThemeProvider initState={tryParseJson(localStorage.getItem('shoppingListDark') || false) || false}>
            <Home />
            <PWABanner />
        </ThemeProvider>
    );
}

render(<App />, document.getElementById('app') as HTMLElement);