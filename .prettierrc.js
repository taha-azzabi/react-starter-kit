/*
  prettier.config.js or .prettierrc.js
  // Assurer que les paramètres ci-dessous sont configurer dans dans Visual Studio Code
    "editor.formatOnSave": true
*/
module.exports = {
  /*
    Virgules finales
    Why enforcing trailing commas
    https://recology.info/2019/02/trailing-commas/
    https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8
  */
  trailingComma: all,
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 90,
};
