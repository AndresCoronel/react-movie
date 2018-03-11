//Dependencies
import React from 'react';
import {Route, Switch } from 'react-router-dom';

//components
import App from './components/App';
import Loguin from './components/Loguin';
import Contact from './components/Contact';
import Home from './components/Home';
import Page404 from './components/Page404';
import Registrarse from './components/Registrarse' 



const AppRoutes= () =>
<App>
    <Switch>
        <Route exact path ="/login" component={Loguin} />
        <Route exact path ="/contact" component={Contact} />
        <Route exact path ="/registrarse" component={Registrarse}/>
        <Route exact path ="/" component={Home} />
        <Route exact component={Page404} />
    </Switch>

    </App>;

export default AppRoutes;    