import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Partie_un from './components/Partie_un'
import Partie_deux from './components/Partie_deux'
import Partie_trois from './components/Partie_trois'
import Partie_quatre from './components/Partie_quatre'
import Partie_cinq from './components/Partie_cinq'
import Contact from './components/Contact'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import NotFound from './components/NotFound'

const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/partie_un' component={Partie_un}/>
            <Route path='/partie_deux' component={Partie_deux}/>
            <Route path='/partie_trois' component={Partie_trois}/>
            <Route path='/partie_quatre' component={Partie_quatre}/>
            <Route path='/partie_cinq' component={Partie_cinq}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/notfound' component={NotFound} />
            <Redirect to="/notfound" />
        </Switch>
    </Router>
)


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();