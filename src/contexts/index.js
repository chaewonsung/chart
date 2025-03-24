import React from 'react';

const { MenuProvider } = require('./menu');

const ContextProvider = ({ children }) => (
  <MenuProvider>{children}</MenuProvider>
);

export default ContextProvider;
