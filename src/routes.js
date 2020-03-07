import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AlunoLista from './pages/StudentList';
import CreateStudent from './pages/CreateStudent';
import EditStudent from './pages/EditStudent';


export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={AlunoLista} />
            <Route path="/create" exact component={CreateStudent} />
            <Route path="/edit" exact component={EditStudent} />

        </BrowserRouter>
    );
}