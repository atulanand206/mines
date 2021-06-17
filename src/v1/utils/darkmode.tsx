import { useEffect, useState } from 'react';
export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode)
    document.documentElement.setAttribute("data-theme", mode)
    setTheme(mode)
  };

  const themeToggler = () => {
    console.log(theme)
    theme === 'light' ? setMode('dark') : setMode('light')
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme)
    document.documentElement.setAttribute("data-theme", "dark")
  }, []);
  
  return themeToggler
};