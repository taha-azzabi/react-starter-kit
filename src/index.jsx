import React from 'react';
import ReactDOM from 'react-dom';

import CommentPage from './containers/Comment';
import Root from './Root';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.getElementById('root'),
);