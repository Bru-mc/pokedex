import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pokedex from './Pokedex';
import { QueryClientProvider} from 'react-query';
import { queryClient } from './services/queryClient';
import { PokedexContextProvider } from './contexts/Pokedex';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PokedexContextProvider>
        <Pokedex />
      </PokedexContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


