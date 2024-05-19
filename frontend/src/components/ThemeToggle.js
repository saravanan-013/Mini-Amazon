import React, { useState } from 'react';


const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="theme-toggle-container">
      <input
        type="checkbox"
        id="themeToggleInput"
        checked={isDarkMode}
        onChange={toggleTheme}
        className="theme-toggle-input"
      />
      <label htmlFor="themeToggleInput" className="theme-toggle-label">
        <div className="theme-toggle-slider"></div>
      </label>
    </div>
  );
};

export default ThemeToggle;
