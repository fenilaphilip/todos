import React from "react";

type themeContextObject = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<themeContextObject>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeContextProvider: React.FC<{ children: any }> = (props) => {
  const [themeMode, setThemeMode] = React.useState("light");

  const toggleThemeHandler = () => {
    if (themeMode == "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  const themeContextValue = {
    theme: themeMode,
    toggleTheme: toggleThemeHandler,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
