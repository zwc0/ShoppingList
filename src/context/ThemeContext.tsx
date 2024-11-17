import { createContext } from "preact";
import { useContext, useState, type StateUpdater } from "preact/hooks";

type Theme = [boolean, StateUpdater<boolean>];

const ThemeContext = createContext<Theme | null>(null);

export const ThemeProvider = ({children, initState}: {
    children: any;
    initState: boolean;
}) => {
    const theme = useState(initState);
    const [isDark] = theme;
	// useEffect(()=>{
		document.body.classList.toggle('dark', isDark);
		localStorage.setItem('shoppingListDark', `${isDark}`);
	// }, [isDark]);

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context)
        throw new Error('theme context not defined');
    return context;
}