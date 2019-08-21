import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
/*
  * Find and load all files that ends with .stories.js inside the
    src folder and their subdirectories
  * See webpack doc to find out more on "require.context" webpack doc
  * https://webpack.js.org/guides/dependency-management/

  * /\.stories.js$/ : Regular expression
  * \. => To escape the dot because it's a special character
  * $  => Matcher end string
  *
*/
const req = require.context('../src', true, /\.stories.js$/);

/**
 * Load all Stories
 */
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
