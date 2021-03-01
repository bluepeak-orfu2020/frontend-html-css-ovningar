/*
  Feel free to look through this file but you do not
  need to change anything here to complete the
  exercise
*/

(function fontSize() {
  const rootPageSize = document.querySelector('#root-page-size');
  const updateSize = () => {
    document.documentElement.style.fontSize = `${rootPageSize.value}px`;
  }

  updateSize();
  rootPageSize.addEventListener('change', () => {
    updateSize();
  });
}());

(function themes() {
  const themePicker = document.querySelector('#theme-picker');

  const updateTheme = () => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(themePicker.value)
  }

  updateTheme();
  themePicker.addEventListener('change', () => {
    updateTheme();
  });
}());