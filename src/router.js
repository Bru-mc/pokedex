import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { PokemonList } from "./pages/pokemonList";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Route component = { PokemonList } path = '/' exact />  
        </BrowserRouter>

    )
}