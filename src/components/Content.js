import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Blog from './pages/Blog';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';
import Github from './pages/Github';
import Songs from './pages/Songs';


const Content = () => {
    return ( 
    <div className="content">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/technologies" component={Technologies}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/github" component={Github}/>
            <Route path="/songs" component={Songs}/>
        </Switch>
    </div> );
}
 
export default Content;