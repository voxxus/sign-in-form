export function enableThemes() {
  const themes = {
    light: {
      '--form-background': '#FFFFFF',
      '--form-title': '#252EFF',
      '--input-border': '#6066FF',
      '--input-border-focused': '#000000',
      '--input-text': '#000000',
      '--button-text-focused': '#FFFFFF',
      '--button-focused': '#000000',
      '--login-button': '#252EFF',
      '--register-button': '#8B54FF',
      '--sign-in-button': '#6066FF',
    },

    dark: {
      '--form-background': '#121212',
      '--form-title': '#FFFFFF',
      '--input-border': '#BB86FC',
      '--input-border-focused': '#FFFFFF',
      '--input-text': '#FFFFFF',
      '--button-text-focused': '#000000',
      '--button-focused': '#FFFFFF',
      '--login-button': '#BB86FC',
      '--register-button': '#6200EE',
      '--sign-in-button': '#3700B3',
    },

    setDarkMode() {
      const root = document.querySelector(':root');

      Object.entries(this.dark).forEach((variable) => {
        root.style.setProperty(variable[0], variable[1]);
      });
    },

    setLightMode() {
      const root = document.querySelector(':root');

      Object.entries(this.light).forEach((variable) => {
        root.style.setProperty(variable[0], variable[1]);
      });
    },
  };

  document.themes = themes;
}
