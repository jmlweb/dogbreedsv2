import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import { Form, List } from '../components';

import theme from '../theme';

injectGlobal`
  ${normalize()}
`;

injectGlobal`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Form searchValue="foo" />
      <List
        data={[
          {
            name: 'affenpinscher',
            image: 'https://images.dog.ceo/breeds/affenpinscher/n02110627_10859.jpg',
          },
        ]}
      />
    </div>
  </ThemeProvider>
);

export default App;
