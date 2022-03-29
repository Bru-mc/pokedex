import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pokedex from './Pokedex';
import { QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import { queryClient } from './services/queryClient';


ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Pokedex />
      {/* <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/> */}
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


